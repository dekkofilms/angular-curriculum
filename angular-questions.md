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

Unit 1.4

What are Angular expressions? How do they compare to tags from templating engines you've used before?
  Angular expressions are like tags, which allows you to run JS expressions and functions like ejs did

What happens when you write invalid code in an expression? What type of error do you get?
  It just puts the whole handlebar expression out on your page without any evaluation, and breaks everything underneath it

What are Angular filters? Describe what a filter does and then name four built-in filters, including one that we haven't used yet.
  Angular filters change the way our data is viewed to the user, and the format at which you show it.
  1) lowercase
  2) uppercase
  3) currency
  4) json

What's the syntax for filters?
  You put it after a pipe in the handlebars

Can you use more than one filter?
  You absolutely can

We'll soon see how to create custom filters. What is a use case for a custom filter?
  Creating a filter that doesn't exist, but could benefit cleaner code with a predefined helper filter that makes your life easy
