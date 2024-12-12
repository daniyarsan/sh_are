import DonatorCardLoading from '@/components/donator/loading/DonatorCardLoading';

export default function DonatorThreadLoading() {
  return [1, 2, 3, 4].map((ind: number) => {
    return <DonatorCardLoading key={ind} />;
  });
}
