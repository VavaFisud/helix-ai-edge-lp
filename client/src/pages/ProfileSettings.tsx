import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

export function ProfileSettings() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [fullName, setFullName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null); // Used for display
  const [publicAvatarUrlForSubmit, setPublicAvatarUrlForSubmit] = useState<string | null>(null); // Actual public URL to save
  const [activeBlobUrl, setActiveBlobUrl] = useState<string | null>(null); // Track current blob for cleanup
  const [uploading, setUploading] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      setLoading(true);
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();

      if (sessionError) {
        toast.error('Error fetching session:', { description: sessionError.message });
        setLoading(false);
        return;
      }

      if (session?.user) {
        setUser(session.user);
        setFullName(session.user.user_metadata?.full_name || '');
        const currentAvatar = session.user.user_metadata?.avatar_url || null;
        setAvatarUrl(currentAvatar);
        setPublicAvatarUrlForSubmit(currentAvatar);
      } else {
        toast.info('No active session. Please log in.');
      }
      setLoading(false);
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    // Cleanup for activeBlobUrl
    // This effect runs when activeBlobUrl changes.
    // It returns a cleanup function that will be called when:
    // 1. The component unmounts.
    // 2. Before the effect runs again if activeBlobUrl changes (i.e., old blob cleanup).
    const currentBlobToClean = activeBlobUrl;
    return () => {
      if (currentBlobToClean) {
        URL.revokeObjectURL(currentBlobToClean);
      }
    };
  }, [activeBlobUrl]);

  const handleUpdateProfile = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user) return;

    setLoading(true);
    console.log('Updating profile with avatar URL:', publicAvatarUrlForSubmit);
    const updates = {
      // id: user.id, // id is not part of UserAttributes for updateUser data, it's implicit
      full_name: fullName,
      avatar_url: publicAvatarUrlForSubmit, // This should be merged into user_metadata
      // updated_at: new Date(), // updated_at is managed by Supabase automatically
    };
    console.log('Profile updates object:', updates);

    // We are updating the user_metadata. The `data` field in `updateUser` is for this.
    const { data: updateResponse, error } = await supabase.auth.updateUser({ data: updates });

    if (error) {
      toast.error('Error updating profile:', { description: error.message });
    } else {
      toast.success('Profile updated successfully!');
      setActiveBlobUrl(null); // Clear active blob as profile is saved

      // The updateUser response (updateResponse.user) should contain the updated user object.
      // Let's prioritize using that, then refreshSession as a fallback or for broader session state update.
      let refreshedUser = updateResponse?.user;

      if (refreshedUser) {
        setUser(refreshedUser);
        const newAvatar = refreshedUser.user_metadata?.avatar_url || null;
        const newFullName = refreshedUser.user_metadata?.full_name || '';
        setAvatarUrl(newAvatar);
        setPublicAvatarUrlForSubmit(newAvatar);
        setFullName(newFullName); // also update fullName state if it changed
        // Dispatch event with the updated user data
        window.dispatchEvent(new CustomEvent('profileUpdated', { detail: { user: refreshedUser } }));
      } else {
        // Fallback to refreshSession if updateUser didn't return the user directly
        const { data: sessionData, error: refreshError } = await supabase.auth.refreshSession();
        if (refreshError) {
          console.error('Error refreshing session:', refreshError.message);
          // Final attempt to get user if refresh fails
          const { data: { user: freshUser } } = await supabase.auth.getUser();
          if (freshUser) {
            setUser(freshUser);
            const freshAvatar = freshUser.user_metadata?.avatar_url || null;
            const freshFullName = freshUser.user_metadata?.full_name || '';
            setAvatarUrl(freshAvatar);
            setPublicAvatarUrlForSubmit(freshAvatar);
            setFullName(freshFullName);
            window.dispatchEvent(new CustomEvent('profileUpdated', { detail: { user: freshUser } }));
          }
        } else if (sessionData?.user) {
          setUser(sessionData.user);
          const updatedAvatar = sessionData.user.user_metadata?.avatar_url || null;
          const updatedFullName = sessionData.user.user_metadata?.full_name || '';
          setAvatarUrl(updatedAvatar);
          setPublicAvatarUrlForSubmit(updatedAvatar);
          setFullName(updatedFullName);
          window.dispatchEvent(new CustomEvent('profileUpdated', { detail: { user: sessionData.user } }));
        }
      }
    }
    setLoading(false);
  };

  const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      throw new Error('You must select an image to upload.');
    }
    const file = event.target.files[0];
    event.target.value = ''; // Clear input for re-selection of the same file

    let newTempBlobUrl: string | null = null;

    try {
      setUploading(true);
      newTempBlobUrl = URL.createObjectURL(file);
      setAvatarUrl(newTempBlobUrl); // Set display to the new blob
      setActiveBlobUrl(newTempBlobUrl); // Set as active (useEffect will clean up any *previous* activeBlobUrl)
      
      const { data: { user: currentUser }, error: getUserError } = await supabase.auth.getUser();
      if (getUserError || !currentUser) {
        toast.error('User not authenticated.');
        setAvatarUrl(publicAvatarUrlForSubmit); // Revert display to last known good public URL
        setActiveBlobUrl(null); // This will trigger cleanup of newTempBlobUrl via useEffect
        setUploading(false);
        return;
      }
      const userId = currentUser.id;
      const filePath = `${userId}/${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, { upsert: true });

      if (uploadError) {
        toast.error('Error uploading avatar:', { description: uploadError.message });
        setAvatarUrl(publicAvatarUrlForSubmit); // Revert display
        setActiveBlobUrl(null); // This will trigger cleanup of newTempBlobUrl via useEffect
        setUploading(false);
        return;
      }

      const { data: publicUrlData, error: getPublicUrlError } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      if (getPublicUrlError || !publicUrlData || !publicUrlData.publicUrl) {
        toast.error('Error getting public URL for avatar.');
        setAvatarUrl(publicAvatarUrlForSubmit); // Revert display
        setActiveBlobUrl(null); // This will trigger cleanup of newTempBlobUrl via useEffect
        setUploading(false);
        return;
      }

      // Success: we have a new public URL for submission.
      // Display (avatarUrl) is already showing newTempBlobUrl.
      // activeBlobUrl is newTempBlobUrl.
      console.log('Generated public URL for avatar:', publicUrlData.publicUrl);
      setPublicAvatarUrlForSubmit(publicUrlData.publicUrl);
      toast.success('Avatar preview updated. Save changes to apply.');

    } catch (error: any) {
      toast.error('Error processing avatar:', { description: error.message });
      setAvatarUrl(publicAvatarUrlForSubmit); // Revert display to last known good public URL
      // If newTempBlobUrl was created, setting activeBlobUrl to null will ensure its cleanup via useEffect
      // if it had become the activeBlobUrl. If it wasn't set as active, it might need manual cleanup.
      // However, setActiveBlobUrl(null) should handle the case where newTempBlobUrl was active.
      if (newTempBlobUrl && newTempBlobUrl !== activeBlobUrl) {
        // This case handles if newTempBlobUrl was created but error occurred before setActiveBlobUrl(newTempBlobUrl)
        URL.revokeObjectURL(newTempBlobUrl);
      }
      setActiveBlobUrl(null); // Ensure no blob is considered active, and trigger cleanup if one was.
    } finally {
      setUploading(false);
    }
  };

  if (loading && !user) {
    return <div className="p-6">Loading profile...</div>;
  }

  if (!user) {
    return <div className="p-6">Please log in to view your profile.</div>;
  }

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Company Profile</CardTitle>
          <CardDescription>Update your company photo and details here.</CardDescription>
        </CardHeader>
        <form onSubmit={handleUpdateProfile}>
          <CardContent className="space-y-8">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={user.email || ''} disabled className="bg-muted/50" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fullName">Company Name</Label>
              <Input 
                id="fullName" 
                type="text" 
                value={fullName} 
                onChange={(e) => setFullName(e.target.value)} 
                placeholder="Sisyphus Ventures"
              />
            </div>
            
            <div className="space-y-2">
              <Label>Company Logo</Label>
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={avatarUrl || undefined} alt={fullName || 'User avatar'} />
                  <AvatarFallback className="text-2xl">
                    {fullName ? fullName.charAt(0).toUpperCase() : (user.email ? user.email.charAt(0).toUpperCase() : 'U')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-grow p-6 border-2 border-dashed border-border rounded-md text-center">
                  <Label htmlFor="avatarUpload" className="cursor-pointer">
                    <div className="text-sm text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto mb-2 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l-3.75 3.75M12 9.75l3.75 3.75M3 17.25V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 17.25z" />
                      </svg>
                      <span className="font-semibold text-primary">Click to upload</span> or drag and drop
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</div>
                  </Label>
                  <Input id="avatarUpload" type="file" className="hidden" onChange={handleAvatarUpload} accept="image/*" disabled={uploading} />
                </div>
              </div>
              {uploading && <p className="text-sm text-muted-foreground">Uploading...</p>}
            </div>

            <div className="space-y-4 pt-4 border-t border-border">
              <h3 className="text-lg font-medium">Newsletter</h3>
              <div className="flex items-center space-x-2">
                <Switch 
                  id="newsletter"
                  checked={newsletter}
                  onCheckedChange={setNewsletter}
                />
                <Label htmlFor="newsletter" className="text-sm font-normal text-muted-foreground">
                  Receive our monthly newsletter with updates and insights.
                </Label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t border-border pt-6 flex justify-end space-x-2">
            <Button variant="outline" type="button" onClick={() => {/* TODO: Handle cancel, maybe reset form or navigate away */ toast.info('Changes discarded')}}>Cancel</Button>
            <Button type="submit" disabled={loading || uploading}>
              {loading || uploading ? 'Saving...' : 'Save changes'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}