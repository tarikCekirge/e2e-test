/// <reference types="cypress" />

describe("Form Doğrulama Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("form doğru şekilde doldurulduğunda başarı sayfasına yönlendirilmelidir", () => {
    cy.get('input[name="username"]').type("testuser");
    cy.get('input[name="password"]').type("Password123!");
    cy.get('input[name="term"]').check();
    cy.get('button[type="submit"]')
      .should("not.be.disabled")
      .click({ force: true });

    cy.url().should("include", "/success");
    cy.get("h1").contains("Başarı");
  });

  it("kullanıcı adı çok kısa girildiğinde hata mesajı görünmelidir", () => {
    cy.get('input[name="username"]').type("tes");
    cy.get('input[name="password"]').type("Password123!");
    cy.get('input[name="term"]').check();
    cy.get('button[type="submit"]').click({ force: true });

    cy.contains("En az 4 karakter olmalıdır").should("be.visible");
    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("kullanıcı adı geçersiz karakter içerdiğinde hata mesajı görünmelidir", () => {
    cy.get('input[name="username"]').type("test@user");
    cy.get('input[name="password"]').type("Password123!");
    cy.get('input[name="term"]').check();
    cy.get('button[type="submit"]').click({ force: true });

    cy.contains("Geçersiz karakter").should("be.visible");
    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("şifre çok kısa girildiğinde hata mesajı görünmelidir", () => {
    cy.get('input[name="username"]').type("testuser");
    cy.get('input[name="password"]').type("short");
    cy.get('input[name="term"]').check();
    cy.get('button[type="submit"]').click({ force: true });

    cy.contains("Karakter sayısı en az 8 olmalıdır").should("be.visible");
    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("şifre çok uzun girildiğinde hata mesajı görünmelidir", () => {
    cy.get('input[name="username"]').type("testuser");
    cy.get('input[name="password"]').type("TooLongPass1!");
    cy.get('input[name="term"]').check();
    cy.get('button[type="submit"]').click({ force: true });

    cy.contains("Şifre en fazla 12 karakter olabilir").should("be.visible");
    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("şifre özel karakter veya rakam içermediğinde hata mesajı görünmelidir", () => {
    cy.get('input[name="username"]').type("testuser");
    cy.get('input[name="password"]').type("Password");
    cy.get('input[name="term"]').check();
    cy.get('button[type="submit"]').click({ force: true });

    cy.contains(
      "Şifreniz en az bir harf, bir rakam ve bir özel karakter içermelidir"
    ).should("be.visible");
    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("şartlar kabul edilmediğinde buton disabled kalmalıdır", () => {
    cy.get('input[name="username"]').type("testuser");
    cy.get('input[name="password"]').type("Password123!");
    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("form tamamen doğru doldurulduğunda buton aktif olmalı ve başarılı giriş yapılmalıdır", () => {
    cy.get('input[name="username"]').type("testuser");
    cy.get('input[name="password"]').type("Password123!");
    cy.get('input[name="term"]').check();

    cy.wait(500);

    cy.get('button[type="submit"]')
      .should("not.be.disabled")
      .click({ force: true });

    cy.url().should("include", "/success");
  });
});
