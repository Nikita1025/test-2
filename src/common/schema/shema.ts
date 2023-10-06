import * as yup from 'yup';
// Валидация полей
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
    .min(0)
    .test(
      'quarter',
      'Сумма первоначального взноса не может быть меньше 25% от стоимости недвижимости',
      function (value) {
        const totalOptions = this.parent.realEstateValue;
        const quarter = totalOptions * 0.25;

        return value! >= quarter;
      },
    )
    .max(
      yup.ref('realEstateValue'),
      'Первоначальный взнос не может быть больше стоимости недвижимости',
    )
    .required('Обязательное поле'),
  propertyType: yup.string().required('Выберите ответ'),
  realEstateOwnership: yup.string().required('Выберите ответ'),
  deadline: yup
    .number()
    .min(4, 'Минимальный срок ипотеки  4 года')
    .max(30, 'Cрок ипотеки не может превышать 30 лет')
    .required('Выберите ответ'),
  monthlyPayment: yup
    .number()
    .min(
      2654,
      'Размер ежемесячного платежа не может быть меньше 2,654 иначе срок будет больше 30 лет',
    )
    .max(51130)

    .required('Обязательное поле'),
});
