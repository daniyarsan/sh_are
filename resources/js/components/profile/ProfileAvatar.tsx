import { cn } from '@/lib/utils';

type Props = {
  image?: string;
  className?: string;
};
export default function ProfileAvatar({ image, className, ...props }: Props) {
  const avatarClass = cn(
    'rounded-full bg-gray-200 cursor-pointer flex items-center justify-center overflow-hidden',
    className,
  );
  return (
    <div {...props} className={avatarClass}>
      {image != null ? (
        <img src={`/storage/images/companies/${image}`} alt='avatar' />
      ) : (
        <img src='/assets/icons/avatar_placeholder.svg' alt='avatar' />
      )}
    </div>
  );
}
