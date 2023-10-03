export const city:OptionType[] = [
    {text: 'Минск'},
    {text: 'Моска'},
    {text: 'Питер'},
    {text: 'Сочи'},
    {text: 'Акко'},
    {text: 'Тель-авив'},
    {text: 'Ариэль'},
]

export const property=[
    {text: 'Частный дом'},
    {text: 'Квартира от застройщика'},
    {text: 'Квартира на вторичном рынке'},
    {text: 'Земельный участок / Строительство'},
    {text: 'Коммерческая недвижимость'},
    {text: 'Частный дом на вторичном рынке'},
]
export const mortgage=[
    {text: 'В ближайший месяц'},
    {text: 'В ближайшие 2 месяц'},
    {text: 'В ближайшие 3 месяца'},
    {text: 'В ближайшие 6 месяцев'},
]
export const status=[
    {text: 'Нет, я пока не владею недвижимостью'},
    {text: 'Да, у меня уже есть недвижимость в собственности'},
    {text: 'Я собираюсь продать единственную недвижимость в ближайшие два года, чтобы использовать полученный капитал для приобретения новой'},
]


export type OptionType={
    text: string
}
