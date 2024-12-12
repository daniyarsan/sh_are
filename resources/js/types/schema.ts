import * as z from 'zod';

const LOGIN_MIN_ERROR_TEXT = 'Логин должен быть как минимум 3 символа';
const PASSWORD_MIN_ERROR_TEXT = 'Пароль должен быть как минимум 6 символа';
const PASSWORD_FORMAT_ERROR_TEXT =
  'Пароль должен содержать не менее 10 символов хотя бы 1 спецсимвол и 1 заглавная буква';
const PASSWORD_MATCH_ERROR_TEXT = 'Пароли должны совпадать';

export const RegistrationSchema = z
  .object({
    login: z.string().min(3, LOGIN_MIN_ERROR_TEXT),
    password: z
      .string()
      .min(6, PASSWORD_MIN_ERROR_TEXT)
      .regex(
        /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)/,
        PASSWORD_FORMAT_ERROR_TEXT,
      ),
    password_confirmation: z.string(),
    _token: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    path: ['confirmPassword'], // Set the path of the error
    message: PASSWORD_MATCH_ERROR_TEXT,
  });

export const LoginSchema = z.object({
  login: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(1, {
    message: 'Обязательное поле',
  }),
  _token: z.string(),
});

export const OTPSchema = z.object({
  otp: z.string().min(6, {
    message: 'ОТП должен быть не менее 6 цифр',
  }),
  secret: z.string(),
});

// Image Schema
export const IMAGE_SCHEMA = z
  .instanceof(File)
  .refine(
    (file) =>
      [
        'image/png',
        'image/jpeg',
        'image/jpg',
        'image/svg+xml',
        'image/gif',
      ].includes(file.type),
    { message: 'Invalid image file type' },
  )
  .refine(
    (file) => {
      return file.size / 1024 / 1024 <= 10;
    },
    {
      message: 'File size should not exceed 10MB',
    },
  );

export const SettingsProfileSchema = z.object({
  login: z.optional(z.string()),
  image: z.optional(IMAGE_SCHEMA),
  _token: z.string(),
});

export const SettingsPasswordSchema = z.object({
  current_password: z.string().min(1),
  password: z
    .string()
    .min(6, PASSWORD_MIN_ERROR_TEXT)
    .regex(/^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)/, PASSWORD_FORMAT_ERROR_TEXT),
  password_confirmation: z.string(),
  _token: z.string(),
});

export const SettingsOtpSchema = z.object({
  otp: z.string().min(6, {
    message: 'ОТП должен быть не менее 6 цифр',
  }),
  secret: z.string(),
  _token: z.string(),
});

export const OtpCheckSchema = z.object({
  otp: z.string().min(6, {
    message: 'ОТП должен быть не менее 6 цифр',
  }),
});

export const InvestmentSchema = z.object({
  project: z.string(),
  contact: z.string(),
  _token: z.string(),
});

export const ApplySchema = z.object({
  name: z.string().min(1, {
    message: 'Обязательное поле',
  }),
  username: z.string().min(1, {
    message: 'Обязательное поле',
  }),
  story_request: z.string().min(50, {
    message: 'Минимальная длина сообщения - 50 символов',
  }),
  _token: z.string(),
});
