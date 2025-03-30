# Тестовое задание на позицию frontend-разработчика  
Реализовать Dashboard с графиками и показателями (Включить минимум 3 типа графиков). Оформить страницу в современном стиле, строго следуя шаблону Berry Dashboard или эквивалентному уровню дизайна.  
Создайть список граждан с функцией фильтрации (поиск по имени, фильтр по дате рождения) и отображением общего количества записей. При выборе записи из списка отобразить карточку с данными, разделенными на категории (например, "Основные сведения", "Члены семьи", "Образование"). Учесть работу с большими объемами данных (картотека может содержать более 100 000 записей и более 150 параметров и до 20 связанных таблиц, таких как «члены семьи» и т.д.)

###  Разработка
**Описание структуры проекта (список основных компонентов и их назначение)**
- реализовано 3 страницы (главная, где располагается Dashboard, страница со списком пользователей(/userlist) и страница с информацией о конкретном пользователе(/userlist/любой id))
- список пользователей сгенерирован и находится в файле **[data.json](https://github.com/ylia-kanoe/testTask/blob/main/src/data.json)**
- на странице со списком пользователя реализованы:
  - вывод списка пользователей **[UserListItem](https://github.com/ylia-kanoe/testTask/blob/main/src/components/userListItem/index.jsx)**
  - сортировка (id, фамилия, возраст, день рождения, название компании, название должности) **[UserListItems](https://github.com/ylia-kanoe/testTask/blob/main/src/components/userListItems/index.jsx)**
  - функционал поиска по имени (отрисовка происходит в компоненте **[Search](https://github.com/ylia-kanoe/testTask/blob/main/src/components/search/index.jsx)**, функционал в компоненте **[UserListItems](https://github.com/ylia-kanoe/testTask/blob/main/src/components/userListItems/index.jsx)**)
  - пагинация и выбор числа строк (отрисовка в компоненте **[Pagination](https://github.com/ylia-kanoe/testTask/blob/main/src/components/pagination/index.jsx)**)
- 'Быстрый просмотр' открывает подробную информацию о пользователе на этой странице, 'Перейти на страницу' переходит на отдельную страницу
- на странице со списком пользователей и на странице с пользователем отрисовывается один и тот же компонент **[UserInfo](https://github.com/ylia-kanoe/testTask/blob/main/src/components/userInfo/index.jsx)**
- в компоненте **[UserInfo](https://github.com/ylia-kanoe/testTask/blob/main/src/components/userInfo/index.jsx)** вкладка 'Profile' отрисовывается руками, остальные генерируются в зависимости от данных
- на главной странице отрисованы 3 графика (компоненты **[BarDiagram](https://github.com/ylia-kanoe/testTask/blob/main/src/components/barDiagram/index.jsx)**, **[LineDiagram](https://github.com/ylia-kanoe/testTask/blob/main/src/components/lineDiagram/index.jsx)**, **[DoughnutDiagram](https://github.com/ylia-kanoe/testTask/blob/main/src/components/doughnutDiagram/index.jsx)**)
- **[BarDiagram](https://github.com/ylia-kanoe/testTask/blob/main/src/components/barDiagram/index.jsx)** - количество дней рождений по месяцам, разделены на male и female
- **[LineDiagram](https://github.com/ylia-kanoe/testTask/blob/main/src/components/lineDiagram/index.jsx)** - количество людей различных возрастов
- **[DoughnutDiagram](https://github.com/ylia-kanoe/testTask/blob/main/src/components/doughnutDiagram/index.jsx)** - общее количество детей у пользователей 
- так же на главной выводится количество пользователей, у которых день рождения в этом месяце и пользователь, у которого день рождения сегодня (если их несколько, выбирается рандомный пользователь)

### Установка зависимостей
Для установки зависимостей, выполните команду:
```sh
$ npm i
```

### Запуск Development сервера
Чтобы запустить сервер для разработки, выполните команду:
```sh
npm run dev
```

## Технологии
- **React.js**
- **Vite**
- **CSS**
- **Chart.js**
