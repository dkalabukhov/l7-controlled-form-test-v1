## Правила и регламент

- [Экзамен: правила, рекомендации и порядок проведения](https://hexly.notion.site/d9289c18871c44508bc7c7f05a51d94f)

## Задание

Ваша задача написать логику валидации с помощью регулярных выражений, отправки формы и перенаправления на другую страницу.

## Задача 1

Напишите и экспортируйте функцию `validateName()`, которая валидирует строку с условием, что валидным именем считается любая строка с длиной больше 0. Если имя валидно, то функция возвращает пустой объект, иначе возвращается объект с ключом errors, который содержит массив со строкой 'введите имя'.

```javascript
validateName('example@gmail.com') // {}
validateName('') // {errors: ['имя не может быть пустым']}
```

## Задача 2

Напишите и экспортируйте функцию `validateEmail()`, которая email, с условием, что валидной почтой считается любая строка с символом `@` посередине, с любой длиной символов, исключая пробелы до и после нее. Если почта валидна, то функция возвращает пустой объект, иначе возвращается объект с ключом errors, который содержит массив со строкой 'введите валидный email'.

```javascript
validateEmail('example@gmail.com') // {}
validateEmail('@gmail.com') // {errors: ['невалидный email']}
validateEmail('g@ и') // {errors: ['невалидный email']}
validateEmail('g@s') // {}
```

## Задача 3

Форма, данная в файле **index.html**, имеет кнопку `submit` c текстом 'зарегистрироваться'. Ваша задача состоит в том, чтобы реализовать для этой кнопки статус active, когда все поля получили валидные данные. Иначе, если хотя бы одно поле не является валидным, кнопка должна иметь атрибут `disabled`.

## Задача 4

Напишите функцию `app()`, который будет ответственна за запуск и работу приложения.

Внутри функции напишите код, который реализует для формы контролируемый input, который будет добавлять класс `такой-то` на инпут, если его содержимое валидно. Иначе input должен иметь класс `такой-то`.

## Задача 5

При нажатии кнопки `зарегистрироваться` должен отправляться запрос на сервер с данными формы и в случае успешного ответа вместо формы нужно вывести строку `<p>Пользователь успешно зарегистрирован</p>`.