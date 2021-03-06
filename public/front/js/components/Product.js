import {select, classNames, templates} from '../settings.js';
import {utils} from '../utils.js';
import AmountWidget from './AmountWidget.js';

class Product{
  constructor(id, data){
    const thisProduct = this;
    thisProduct.id = id;
    thisProduct.data = data;
    thisProduct.renderInMenu();
    thisProduct.getElements();
    thisProduct.initAccordion();
    thisProduct.initOrderForm();
    thisProduct.initAmountWidget();
    thisProduct.processOrder();
    // console.log('new Product:', thisProduct);
  }

  renderInMenu(){
    const thisProduct = this;

    /* generate HTML based on template */
    const generatedHTML = templates.menuProduct(thisProduct.data);

    /* create element using utils.createElementFromHTML */
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);

    /* find menu container */
    const menuContainer = document.querySelector(select.containerOf.menu);

    /* add element to menu */
    menuContainer.appendChild(thisProduct.element);
  }

  getElements(){
    const thisProduct = this;

    thisProduct.accordionTrigger = thisProduct.element.querySelector(select.menuProduct.clickable);
    thisProduct.form = thisProduct.element.querySelector(select.menuProduct.form);
    thisProduct.formInputs = thisProduct.form.querySelectorAll(select.all.formInputs);
    thisProduct.cartButton = thisProduct.element.querySelector(select.menuProduct.cartButton);
    thisProduct.priceElem = thisProduct.element.querySelector(select.menuProduct.priceElem);
    thisProduct.imageWrapper = thisProduct.element.querySelector(select.menuProduct.imageWrapper);
    thisProduct.amountWidgetElem = thisProduct.element.querySelector(select.menuProduct.amountWidget);
  }

  initAccordion(){
    const thisProduct = this;

    /* find the clickable trigger (the element that should react to clicking) */
    const clickableTrigger = thisProduct.element;

    /* START: click event listener to trigger */
    thisProduct.accordionTrigger.addEventListener('click', function(){
      // console.log('clicked trigger: ', clickableTrigger);

      /* prevent default action for event */
      event.preventDefault();

      /* toggle active class on element of thisProduct */
      clickableTrigger.classList.toggle('active');

      /* find all active products */
      const activeProducts = document.querySelectorAll('.product.active');
      //console.log('found active products: ', activeProducts);

      /* START LOOP: for each active product */
      for(let activeProduct of activeProducts){

        /* START: if the active product isn't the element of thisProduct */
        if(activeProduct !== clickableTrigger){

          /* remove class active for the active product */
          activeProduct.classList.remove('active');

        /* END: if the active product isn't the element of thisProduct */
        }
      /* END LOOP: for each active product */
      }
    /* END: click event listener to trigger */
    });
  }

  initOrderForm(){
    const thisProduct = this;
    thisProduct.form.addEventListener('submit', function(event){
      event.preventDefault();
      thisProduct.processOrder();
    });

    for(let input of thisProduct.formInputs){
      input.addEventListener('change', function(){
        thisProduct.processOrder();
      });
    }

    thisProduct.cartButton.addEventListener('click', function(event){
      event.preventDefault();
      thisProduct.processOrder();
      thisProduct.addToCart();
    });

  }

  processOrder(){
    const thisProduct = this;

    /* read all data from the form */
    const formData = utils.serializeFormToObject(thisProduct.form);
    //console.log('formData', formData);

    /* Add new empty object */
    thisProduct.params = {};

    /* set variable price to equal thisProduct.data.price */
    let price = thisProduct.data.price;
    // console.log('Product initial price: ', price);

    /* START LOOP: for each paramId in thisProduct.data.params */
    for (let paramId in thisProduct.data.params){

      /* save element in thisProduct.data.params with key paramId as const param */
      const param = thisProduct.data.params[paramId];

      /* START LOOP: for each optionId in param.options */
      for (let optionId in param.options){

        /* save element in param.otions with key optionId as const option */
        const option = param.options[optionId];

        /*  START IF condition: if option is selected and option is not default */
        const optionSelected = formData.hasOwnProperty(paramId) && formData[paramId].indexOf(optionId) > -1;
        //console.log('option selected: ', optionSelected);

        if(optionSelected && !option.default){

          /* add price of option to variable price */
          price = price + option.price;
          // console.log('price raised by: ', option.price);

          /* END IF condition: if option is selected and option is not default */
        }
        /* START ELSE IF: if option is not selected and option is default */
        else if (!optionSelected && option.default){
          /* deduct price of option from price */
          price = price - option.price;

          // console.log('price reduced: ', option.price);
        }

        /* create const to store matching elements */
        const images = thisProduct.imageWrapper.querySelectorAll('.' + paramId + '-' + optionId);

        /* START IF condition for adding images for selected options */
        if(optionSelected) {
          if(!thisProduct.params[paramId]) {
            thisProduct.params[paramId] = {
              label: param.label,
              options: {},
            };
          }
          thisProduct.params[paramId].options[optionId] = option.label;
          for (let image of images) {
            image.classList.add(classNames.menuProduct.imageVisible);
          }
        }

        /* START ELSE condition for removing images for deselected options */
        else {
          for (let image of images) {
            image.classList.remove(classNames.menuProduct.imageVisible);
          }
        }
      }
    }
    /* multiply price by amount */
    // price *= thisProduct.amountWidget.value; //zmiana w module 9.3 na:
    thisProduct.priceSingle = price;
    thisProduct.price = thisProduct.priceSingle * thisProduct.amountWidget.value;


    /* set the contents of thisProduct.priceElem to be the value of variable price */
    // thisProduct.priceElem.innerHTML = price; //zmiana w module 9.3 na:
    thisProduct.priceElem.innerHTML = thisProduct.price;
    // console.log('Product params: ', thisProduct.params);
  }


  initAmountWidget(){
    const thisProduct = this;

    thisProduct.amountWidget = new AmountWidget(thisProduct.amountWidgetElem);
    thisProduct.amountWidgetElem.addEventListener('updated', function(){
      thisProduct.processOrder();
    });
  }

  addToCart(){
    const thisProduct = this;

    thisProduct.name = thisProduct.data.name;
    thisProduct.amount = thisProduct.amountWidget.value;

    // app.cart.add(thisProduct);

    const event = new CustomEvent('add-to-cart', {
      bubbles: true,
      detail: {
        product: thisProduct,
      },
    });
    thisProduct.element.dispatchEvent(event);
  }
}

export default Product;
