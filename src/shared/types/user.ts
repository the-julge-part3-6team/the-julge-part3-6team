interface UserDataType {
  address?: string;
  bio?: string;
  name?: string;
  phone?: string;
  id: string;
  email: string;
  shop: Store;
  type: 'employee' | 'employer';
}

interface FieldErrors {
  [key: string]: string;
}

interface SetFieldErrors {
  (error: FieldErrors): void;
}

interface UserFromErrors extends FieldErrors {
  name: string;
  phone: string;
  address: string;
  bio: string;
}
