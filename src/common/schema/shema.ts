import * as yup from 'yup';

export const validationSchema = yup.object({
  realEstateValue: yup
    .number()
    .min(0)
    .max(10000000, 'Стоимость недвижимости не может превышать 10,000,000')
    .required('Укажите стоимость недвижимости'),
  city: yup.string().required('Выберите ответ'),
  mortgageTime: yup.string().required('Выберите ответ'),
  initialPayment: yup
    .number()
    .required(
      'Сумма первоначального взноса не может быть меньше 25% от стоимости недвижимости',
    ),
  propertyType: yup.string().required('Выберите ответ'),
  realEstateOwnership: yup.string().required('Выберите ответ'),
  deadline: yup
    .number()
    .min(4)
    .max(30, 'Cрок ипотеки не может превышать 30 лет')
    .required('Выберите ответ'),
  monthlyPayment: yup
    .number()
    .required(
      'Размер ежемесячного платежа не может быть меньше 2,654 иначе срок будет больше 30 лет',
    ),
});
