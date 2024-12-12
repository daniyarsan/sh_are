export {};

export interface LoadingContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

import { ErrorBag, Errors } from '@inertiajs/core';

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: Auth;
  errors: Errors & ErrorBag;
  origin: string;
  success: string;
  menu: MenuItem[];
  ziggy: Ziggy;
  csrf_token: string;
};

export type Auth = {
  qr: string;
  secret: string;
  user: User;
};

export type User = {
  id: number;
  login: string;
  name: string;
  email: string;
  email_verified_at: string;
  awards: [];
  company: Company;
  google2fa_secret?: string;
  created_at: string;
  updated_at: string;
};

export type Ziggy = {
  location: string;
  query: object;
};

export type MenuItem = {
  active?: boolean;
  text: string;
  href: string;
};

export type Vote = {
  id: number;
  ip: string;
  hash: string;
  project_id: number;
  created_at: string;
  updated_at: string;
};

export type Category = {
  id: number;
  name: string;
  industry_id: number;
};

export type Industry = {
  id: number;
  name: string;
  order: number;
  hidden?: boolean;
  invested: PriceFormat;
  categories: Category[];
  projects: Project[];
};

export type PriceFormat = {
  value: number;
  currency: string;
  formatted: string;
  short: string;
};

export type IndustryShare = {
  amount: PriceFormat;
  industry: Industry;
  percentage: number;
};

export type CompanyShare = {
  company_id: number;
  project_id: number;
  company_name: string;
  invested: PriceFormat;
  percentage: number;
};

export type Status = 'new' | 'active' | 'finished';

export type Project = {
  id: number;
  name: string;
  slug: string;
  content: string;
  status: Status;
  cost: PriceFormat;
  finished: boolean;
  featured: boolean;
  new: boolean;
  custom_url?: string;
  done_text?: string;
  done_value?: string;
  mobile_image_path?: string;
  image_path?: string;
  industry: Industry;
  invested: PriceFormat;
  investments: Investment[];
  shares: CompanyShare[];
  industry_id: number;
  target_votes: number;
  investedPercentage: number;
  votes: Vote[];
};

export type Company = {
  id: number;
  name: string;
  slug: string;
  type: string;
  user_id: number;
  description: string;
  image_path: string;
  address: string;
  shares: IndustryShare[];
  invested: PriceFormat;
  /*** TODO: investments */
  investments: Investment[];
  projectsCount: number;
  created_at: string;
  updated_at: string;
};

export type Currency = {
  id: number;
  name: string;
};

export type Investment = {
  id: number;
  amount: PriceFormat;
  status: string;
  payment_id: boolean;
  company_id: number;
  project_id: number;
  project: Project;
  company: Company;
  created_at: string;
  updated_at: string;
  currency_id: number;
  custom_url?: string;

  project_name: string;
  project_slug: string;
  company_name: string;
  company_slug: string;
  statusLabel: string;
  paymentAddress: string;
  currency: Currency;
};

export type Video = {
  id: number;
  entity_id: number;
  filename: string;
  filepath: string;
  type: string;
  preview_path: string;
  entity_type: string;
  created_at: string;
  updated_at: string;
};

export type Image = {
  id: number;
  filename: string;
  filepath: string;
  type: string;
  entity_id: number;
  entity_type: string;
  created_at: string;
  updated_at: string;
};

export type Application = {
  id: number;
  company: Company;
  company_id: number;
  name: string;
  username: string;
  origin: string;
  project: Project;
  story_brief: string;
  story_description: string;
  story_request: string;
  story_request_path: string;
  story_title: string;
  invested: PriceFormat;
  finished: boolean;
  avatar_path: string;
  created_at: string;
  updated_at: string;
  images: Image[];
  videos: Video[];
};

export type ApiResponseLinks = {
  url?: string;
  label?: string;
  active: boolean;
};
export type ApiMeta = {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
  links: ApiResponseLinks[];
};

export type ApiResponse<T> = {
  data: T[];
  links: {
    first: string;
    last: string;
    next: string;
    prev: string;
  };
  meta: ApiMeta;
};

export type SelectOption = {
  label: string;
  value: number;
};
