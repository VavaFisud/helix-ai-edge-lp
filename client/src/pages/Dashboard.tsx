import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { DailyFundamentalReportWidget } from '@/components/widgets/DailyFundamentalReportWidget';
import { FundamentalCurrencyMatrixWidget } from '@/components/widgets/FundamentalCurrencyMatrixWidget';
import { HeatmapWidget } from '@/components/widgets/HeatmapWidget';
import { GhostTradingWidget } from '@/components/widgets/GhostTradingWidget';
import { CentralBankWidget } from '@/components/widgets/CentralBankWidget';
import { MarketPsychologyWidget } from '@/components/widgets/MarketPsychologyWidget';
import { InteractiveChartWidget } from '@/components/widgets/InteractiveChartWidget';
import { WatchlistWidget } from '@/components/widgets/WatchlistWidget';
import { EconomicCalendarWidget } from '@/components/widgets/EconomicCalendarWidget';
import { Construction } from 'lucide-react';

const BlurOverlay = ({ children, title }: { children: React.ReactNode; title: string }) => (
  <div className="relative">
    <div className="blur-sm pointer-events-none">
      {children}
    </div>
    <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="text-center space-y-2 p-4">
        <Construction className="w-8 h-8 text-primary mx-auto" />
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">Coming Soon</p>
      </div>
    </div>
  </div>
);

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        
        const userMetadata = user.user_metadata;
        const identities = user.identities;
        
        let firstName = '';
        let lastName = '';
        let avatarUrl = '';
        let email = user.email || '';
        
        if (identities && identities.length > 0) {
          const identity = identities[0];
          const identityData = identity.identity_data;
          
          if (identityData) {
            firstName = identityData.given_name || identityData.first_name || '';
            lastName = identityData.family_name || identityData.last_name || '';
            avatarUrl = identityData.picture || identityData.avatar_url || '';
            email = identityData.email || email;
            
            if (!firstName && identityData.full_name) {
              const nameParts = identityData.full_name.split(' ');
              firstName = nameParts[0] || '';
              lastName = nameParts.slice(1).join(' ') || '';
            }
          }
        }
        
        if (userMetadata) {
          firstName = firstName || userMetadata.given_name || userMetadata.first_name || '';
          lastName = lastName || userMetadata.family_name || userMetadata.last_name || '';
          avatarUrl = avatarUrl || userMetadata.picture || userMetadata.avatar_url || '';
          email = email || userMetadata.email || '';
          
          if (!firstName && userMetadata.full_name) {
            const nameParts = userMetadata.full_name.split(' ');
            firstName = nameParts[0] || '';
            lastName = nameParts.slice(1).join(' ') || '';
          }
        }
        
        console.log('User data retrieved:', {
          firstName,
          lastName,
          email,
          avatarUrl,
          provider: identities?.[0]?.provider
        });
        
        if (firstName || lastName || avatarUrl) {
          try {
            let finalAvatarUrl = avatarUrl;
            
            if (avatarUrl && !avatarUrl.includes('supabase')) {
              try {
                const response = await fetch(avatarUrl);
                const blob = await response.blob();
                const fileExtension = avatarUrl.includes('.jpg') ? 'jpg' : 
                                    avatarUrl.includes('.jpeg') ? 'jpeg' : 
                                    avatarUrl.includes('.png') ? 'png' : 'jpg';
                const fileName = `avatar.${fileExtension}`;
                const filePath = `${user.id}/${fileName}`;
                
                const { error: uploadError } = await supabase.storage
                  .from('avatars')
                  .upload(filePath, blob, { upsert: true });
                
                if (!uploadError) {
                  const { data: publicUrlData } = supabase.storage
                    .from('avatars')
                    .getPublicUrl(filePath);
                  
                  if (publicUrlData?.publicUrl) {
                    finalAvatarUrl = publicUrlData.publicUrl;
                    console.log('Avatar OAuth téléchargé et stocké:', finalAvatarUrl);
                  }
                } else {
                  console.error('Erreur upload avatar OAuth:', uploadError);
                }
              } catch (uploadError) {
                console.error('Erreur lors du téléchargement de l\'avatar OAuth:', uploadError);
              }
            }
            
            const { error } = await supabase.auth.updateUser({
              data: {
                first_name: firstName,
                last_name: lastName,
                avatar_url: finalAvatarUrl,
                full_name: `${firstName} ${lastName}`.trim()
              }
            });
            
            if (error) {
              console.error('Erreur lors de la mise à jour du profil:', error);
            } else {
              console.log('Profil utilisateur mis à jour avec succès');
            }
          } catch (error) {
            console.error('Erreur lors de la mise à jour:', error);
          }
        }
      }
    };
    
    getUser();
  }, []);

  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <DailyFundamentalReportWidget />
        <FundamentalCurrencyMatrixWidget />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
         <BlurOverlay title="Heatmap">
           <HeatmapWidget />
         </BlurOverlay>
         <BlurOverlay title="Ghost Trading">
           <GhostTradingWidget />
         </BlurOverlay>
       </div>
       
       <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
         <BlurOverlay title="Central Bank Whisperer">
           <CentralBankWidget />
         </BlurOverlay>
         <BlurOverlay title="Market Psychology">
           <MarketPsychologyWidget />
         </BlurOverlay>
         <BlurOverlay title="Watchlist">
           <WatchlistWidget />
         </BlurOverlay>
         <BlurOverlay title="Economic Calendar">
           <EconomicCalendarWidget />
         </BlurOverlay>
       </div>
      
      <div className="grid grid-cols-1 gap-4">
        <BlurOverlay title="Charts">
          <InteractiveChartWidget />
        </BlurOverlay>
      </div>
    </div>
  );
}
