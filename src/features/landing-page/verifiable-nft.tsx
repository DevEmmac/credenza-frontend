import VerifiableNftAnimation from '@/motion/verifiable-nft-animation';
import { Section } from '@/components/sectional-ctn';

export const VerifiableNft = () => {
  return (
    <div>
      <Section
        title="Verifiable NFT Credentials"
        subtitle="Showcase your achievements with tamper-proof digital credentials. Your professional milestones are issued as NFTs, owned by you, and verifiable by anyone—no central authority needed."
        animation={<VerifiableNftAnimation />}
      />
    </div>
  );
};
