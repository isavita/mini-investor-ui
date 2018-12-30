# Mini Investor UI

## Local setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Docker setup

  * For build the app
  ```shell
  make build
  ```
  * For build and run the app
  ```shell
  make dev
  ```

## Project design
### Web client in Vue with the following pages

  * __Home page__ - It has list of all campaigns with pagination.
  * __Investment page__ - It has form for making new investment for a given campaign. It has validation that the invested
    amount is multiple of the campaign multiplier amount.
  * __Investment success page__ - It has message with the amount of maded investment.

### Swappable JSON APIs implemented in following repositories

  * __Elixir__ implementation with Phoenix ([repository](https://github.com/isavita/mini-investor-api-ex))

