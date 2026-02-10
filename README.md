## Scriptlet Tags

[DEMO LINK](https://nodejs-lab-work-2.onrender.com/)

| Тег | Синтаксис | Опис | Приклад використання |
|-----|-----------|------|---------------------|
| **Scriptlet** | `<% код %>` | Виконує JavaScript код без виводу в HTML. Використовується для логіки (цикли, умови). | `<% students.forEach((student) => { %>` |
| **Output** | `<%= значення %>` | Виводить значення змінної з екрануванням HTML спецсимволів (безпечний вивід). | `<%= student.name %>` |
| **Unescaped Output** | `<%- значення %>` | Виводить значення без екранування HTML (використовувати обережно). | `<%- htmlContent %>` |
| **Comment** | `<%# коментар %>` | Коментар у шаблоні, не відображається в результаті. | `<%# TODO: додати валідацію %>` |
| **Literal** | `<%% %>` | Виводить літеральний символ `<%` в HTML. | `<%%` → виведе `<%` |

## Приклади з проекту

### Вивід даних студента (`student.ejs`)
```ejs
<h1><%= student.name %></h1>
<p><strong>Роль:</strong> <%= student.role %></p>
<p><strong>Група:</strong> <%= student.group %></p>
```

### Цикл forEach (`team.ejs`)
```ejs
<% students.forEach((student) => { %>
  <tr>
    <td><a href="/students/<%= student.id %>"><%= student.name %></a></td>
    <td><%= student.role %></td>
  </tr>
<% }) %>
```

### Вивід кількості елементів (`team.ejs`)
```ejs
<p>У бригаді <%= students.length %> учасників.</p>
```
