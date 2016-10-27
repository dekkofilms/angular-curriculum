Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?
  Because it's more popular! -thanks, Zubair.

People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?
  1) $scope Woes – There is quite a bit of FUD being thrown around with regards to how AngularJS does scoping of databound elements.
  2) Dependency Injection is not Minification Friendly
  3) It’s all changing in AngularJS 2.0

Is Angular an MVC framework?
  Yes.

Turn to the Angular docs. Find ng-app. What is it and what does it do? What does ng stand for?
  1) ng stands for Angular
  2) it designates what elements on your static page will use angular

Unit 1.2

What does ng-model do?
  Binds a form element to a property on the scope

What is "dirty checking"?
  Checking for changes on the model, every time there could be a potential change

Find a way to set the initial value of "name" as "BoJack" (without writing a controller).
  ng-init will do that for us

What are those {{ }} expressions? Are they Handlebars?
  Yes

Explain what two-way data binding is.
  All the changes on the view reflect the model, and all the changes on the model reflect the view

BONUS: Research the $digest loop
  We did that already
