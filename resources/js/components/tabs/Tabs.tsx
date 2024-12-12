import { motion } from 'framer-motion';

type OptionValue = number | string | null;
type Option = {
  label: string;
  value: OptionValue;
};

type Props = {
  current: OptionValue;
  onChange: (value: number | string | null) => void;
  options: Option[];
};

export default function Tabs({ options, onChange, current }: Props) {
  return (
    <ul className='flex flex-row text-center'>
      {options.map((item, index) => {
        return (
          <li key={index} className='me-1'>
            <a
              className='tab-pin relative'
              onClick={() => onChange(item.value)}>
              {item.value === current && (
                <motion.div
                  layoutId='active-tab'
                  className='absolute border border-primary inset-0 rounded-full'
                  transition={{ type: 'spring', duration: 0.6 }}
                />
              )}
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
