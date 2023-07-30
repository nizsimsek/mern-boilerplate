
# NizBoilerPlate

Bu repo MERN Stack Boilerplate projeyi kapsamaktadır.



---
## Kullanılan Teknolojiler

**İstemci:** React, ContextAPI, Axios, TailwindCSS, MantineUI

**Sunucu:** Node, Express, KnexJS, MySQL

---
## Bilgisayarınızda Çalıştırın

#### Klonlama ve Paketlerin Yüklenmesi

---

Projeyi klonlayın

```bash
  git clone https://github.com/nizsimsek/mern-boilerplate
```

Proje dizinine gidin

```bash
  cd mern-boilerplate
```

Gerekli paketleri yükleyin

```bash
  npm install
```

#### Veritabanı Ayarları ve Migration/Seed

---
**NOT : Aşağıdaki adımları sırası ile takip ediniz.**

Veritabanı ayarlarını yapılandırın

```server->src->database->connection.js``` dosyasını açınız ve veritabanı verilerinize göre güncelleyiniz.

```bash
const connection = require("knex")({
  client: "mysql2",
  connection: {
    host: "127.0.0.1", // local ip
    port: 3306, // local mysql port
    user: "root", // local mysql user
    password: "root", // local mysql password
    database: "niz-db", // local mysql database
  },
});

module.exports = connection;
```

aynı şekilde ```server->src->database->knexfile.js```dosyası için de güncelleme gerçekleştiriniz.

Bu adımı tamamladığınızda veritabanına direkt olarak bağlantı sağlayabileceksiniz.

**NOT : Migration ve seed işlemlerini gerçekleştirmek için aşağıdaki yolu izleyiniz**

```bash
cd server/src/database
knex migrate:latest
knex seed:run
```

Bu işlemleri yaptıktan sonra veritabanı ve default verileriniz hazır olacaktır.

---

#### Sunucu ve Client çalıştırma

---

```bash
  npm run server
```

Bu işlem ile birlikte Client ve Sunucu(backend) projeleri build alınacak ve 3000 portunda çalışmaya başlayacaktır.

Tarayıcınızın url kısmına ```http://localhost:3000/app``` yazarak projeyi kullanmaya başlayabilirsiniz.

Default kullanıcı giriş verileri;
| Email | Password     | Role                       |
| :---------------- | :--------- | :------ |
| `super@admin.com` | `123456Kc` | `super` |
| `student@user.com` | `123456Kc` | `user` |

  
---
## API Kullanımı

#### Tüm kullanıcıları getir

```http
  GET /api/users
```

#### Belirli id ye sahip kullanıcıyı getir

```http
  GET /api/users/${id}
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string(uuid)` | **Gerekli**. Getirilecek kullanıcının id değeri |


#### Kullanıcı ekle

```http
  POST /api/users
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Gerekli**. Kullanıcının ismi |
| `surname`      | `string` | **Gerekli**. Kullanıcının soyismi |
| `email`      | `string` | **Gerekli**. Kullanıcının sisteme giriş yaparken kullanacağı mail adresi |
| `password`      | `string` | **Gerekli**. Kullanıcının sisteme giriş yaparken kullanacağı şifre |

#### Kullanıcı bilgisi güncelle

```http
  PUT /api/users/${id}
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Gerekli**. Kullanıcının ismi |
| `surname`      | `string` | **Gerekli**. Kullanıcının soyismi |
| `email`      | `string` | **Gerekli**. Kullanıcının sisteme giriş yaparken kullanacağı mail adresi |
| `password`      | `string` | **Gerekli**. Kullanıcının sisteme giriş yaparken kullanacağı şifre |

#### Kullanıcı silme

```http
  DELETE /api/users/${id}
```

---

## CRUD API Geliştirme Aşaması

Geliştirmesi yapılacak modül için sırasıyla aşağıdaki adımlar izlenmelidir.

- Model için migration ve seed oluşturulur.
- Model oluşturulur ve BaseModel den extend edilir.(Default crud ve veritabanı işlemleri BaseModelden gelir. ```BaseModel BasicORM gibi çalışmaktadır.```)
- Service sınıfı oluşturulur ve model için CRUD işlemleri yazılır.
- Controller sınıfı oluşturulur ve alınan istekler ve verileri service sınıfına gönderilir.
- Router sınıfı oluşturulur ve gelen istekler için controller sınıfına yönlendirilir.
- Yeni oluşturulan router apiRouter içerisinde import edilir. (server/src/routes/apiRouter.js) daha sonrasında yeni oluşturulan router için bir path belirlenir. 

## Framework Geliştiricisi

- [@nizsimsek](https://www.linkedin.com/in/nizsimsek/)
  