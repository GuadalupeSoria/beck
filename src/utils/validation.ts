export const validateShippingAddress = (address: {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zipCode: string;
}) => {
  const errors: Record<string, string> = {};

  if (!address.firstName.trim()) {
    errors.firstName = 'First name is required';
  }

  if (!address.lastName.trim()) {
    errors.lastName = 'Last name is required';
  }

  if (!address.address.trim()) {
    errors.address = 'Address is required';
  }

  if (!address.city.trim()) {
    errors.city = 'City is required';
  }

  if (!address.zipCode.trim()) {
    errors.zipCode = 'ZIP code is required';
  } else if (!/^\d{5}(-\d{4})?$/.test(address.zipCode)) {
    errors.zipCode = 'Invalid ZIP code format';
  }

  return errors;
};