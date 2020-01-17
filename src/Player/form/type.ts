export interface BirthdayFormProps {
  onSubmit: (params: BurthdayFormData) => Promise<void>;
  errorCode: string;
  isSubmitting: boolean;
}

export interface BurthdayFormData {
  birthday: any,
}
