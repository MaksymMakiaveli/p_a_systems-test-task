// export class DateFormatter {
//   static formatDefault(date: string) {
//     try {
//       const dateObj = new Date(date);

//       if (isNaN(dateObj.getTime())) {
//         return 'Invalid date';
//       }

//       const day = dateObj.getDate().toString().padStart(2, '0');
//       const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
//       const year = dateObj.getFullYear();

//       return `${day}/${month}/${year}`;
//     } catch (error) {
//       console.error('Error formatting date:', error);
//       return 'Invalid date';
//     }
//   }

//   toJSON() {
//     return { ...this }; // here I make a POJO's copy of the class instance
//   }
// }

function formatDefault(date: string | null | undefined | Date) {
  if (!date) {
    return 'Invalid date';
  }

  try {
    const dateObj = new Date(date);

    if (isNaN(dateObj.getTime())) {
      return 'Invalid date';
    }

    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear();

    return `${day}/${month}/${year}`;
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date';
  }
}

export const DateFormatter = {
  formatDefault,
} as const;
