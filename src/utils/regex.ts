export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);

export const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, "");
  
    if (!phoneNumber || !/^\d+$/.test(phoneNumber)) {
      return value;
    }
  
    const formattedPhoneNumber = `(${phoneNumber.slice(
      0,
      2
    )}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
    return formattedPhoneNumber;
  };
