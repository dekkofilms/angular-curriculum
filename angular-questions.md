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

Unit 1.5

What is the purpose of ng-init?
  Allows you to evaluate an expression in the current scope

Why use ng-src and ng-href?
  ng-src will be a less buggy way to include a url in the img tag, ng-href will also be similar, and both make sure the user can go to the correct place ensuring angular has swept through the file already

What are directives?
  they are the ng tags

Does ng-class require an object to be passed in?
  no, there are three ways to use it. string, object, and array

What order does an ng-repeat display items in?
  top down
How does ng-repeat handle duplicate data?
  sucky ... you have to track by the index to ensure that it won't skip over the correct items.


Unit 1.6

What is $scope?
  Is the global object that keeps our view variable up to date. It is what allows us two way data binding

What are Angular modules? What's the syntax for defining a module?
  -A module is a collection of services, directives, controllers, filters, and configuration information
  -angular.module("firstApp", []);

Why do we pass in $scope as an argument to controller functions?
  Because that is what the docs says

In Express, what are Angular controllers most analogous to?
  It is most analogous too routes in a server, returning you different data based on when and where you put that call.
