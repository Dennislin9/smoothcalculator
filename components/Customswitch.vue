<template>
  <label for="primary" class="switch switch--primary">
    <input class="switch__input" type="checkbox" id="primary" />
    <div class="switch__box">
      <span class="switch__box-inner"></span>
    </div>
    <p class="switch__desc">
     Include <span class="primary-color"> Weekends</span> 
    </p>
  </label>
</template>
<style lang="scss" scoped>
// Variables
$colors: (
  "primary": #0D8FFE,
  "danger": #ff4651,
  "success": #1dc9b7,
  "warning": #ffb822,
  "info": #2786fb,
);

$font-family: "Amaranth", Fira Sans, Helvetica Neue, sans-serif;

$ease: cubic-bezier(0.38, 0.24, 0.28, 1.17);
// Basic styles
*,
*::after,
*::before {
  box-sizing: border-box;
}


// Switches style
.switch {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  // Hide input
  &__input {
    opacity: 0;
    visibility: hidden;
    width: 1px;
    height: 1px;
    background-color: transparent;
    pointer-events: none;
    position: absolute;
  }
  // Switch box
  &__box {
    padding: 3px;
    border-radius: 100px;
    position: relative;
    height: 26px;
    width: 42px;
    background-color: #e4ecfa;
    box-shadow: 0 0 10px transparent;
    transition: 0.4s all $ease;
    overflow: hidden;

    // Before for background changes
    &::before {
      content: "";
      width: 120%;
      height: 110%;
      position: absolute;
      top: -5%;
      left: -10%;
      border-radius: 100px;
      transform: translateX(-100%);
      transition: 0.3s ease all;
      will-change: transform, border-radius;
    }
    // Inner circle
    &-inner {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 100px;
      background-color: white;
      transform: translateX(0);
      box-shadow: 0 4px 20px rgba(white, 0.2);
      transition: 0.4s all $ease;
      overflow: hidden;

      &::after {
        content: "";
        height: 4px;
        width: 4px;
        border-radius: 10px;
        top: 8px;
        left: 8px;
        position: absolute;
        transform: translateX(-40px);
      }
    }
  }
  // Animation on check input
  &__input:checked ~ &__box > &__box-inner {
    animation: checkSwitch 0.4s $ease forwards;

    &::after {
      animation: checkSwitchAfter 0.4s $ease 0.2s forwards;
    }
  }
  // Animation on uncheck
  &__input:not(:checked) ~ &__box > &__box-inner {
    transform: translateX(-20px);
    animation: unCheckSwitch 0.4s $ease forwards;

    &::after {
      animation: unCheckSwitchAfter 0.4s $ease forwards;
    }
  }

  // Styles for all states
  @each $key, $value in $colors {
    &--#{$key} &__box-inner::after {
      background-color: rgba($value, 0.6);
    }
    &--#{$key} &__input:checked ~ &__box {
      box-shadow: 0 8px 12px rgba($value, 0.1);

      &::before {
        transform: translateX(0);
        border-radius: 20px;
      }
    }

    &--#{$key} &__box::before {
      background-color: $value;
    }
  }
  // Switches text style
  &__desc {
    margin-left: 24px;
  }
}
@each $key, $value in $colors {
  .#{$key}-color {
    color: $value;
  }
}
.switch__desc{
      display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

// Switches keyframes :)
@keyframes checkSwitch {
  0% {
    transform: translateX(0);
  }
  50% {
    width: 36px;
    transform: translateX(0);
  }
  100% {
    width: 20px;
    transform: translateX(16px);
  }
}

@keyframes checkSwitchAfter {
  from {
    transform: translateX(-40px) scale(0.2);
  }
  to {
    transform: translateX(0) scale(1);
  }
}
@keyframes unCheckSwitchAfter {
  from {
    transform: translateX(0) scale(1);
  }
  to {
    transform: translateX(40px) scale(0.2);
  }
}
@keyframes unCheckSwitch {
  0% {
    width: 20px;
    transform: translateX(16px);
  }
  50% {
    width: 36px;
    transform: translateX(0);
  }
  100% {
    transform: translateX(0);
  }
}

</style>