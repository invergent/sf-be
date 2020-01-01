class Validator {
  constructor(method, data, expectedProps, regex) {
    this.data = data;
    this.expectedProps = expectedProps;
    this.regex = regex;
    this.errors = [];

    if (this.requestIsEmpty()) return this.errors;
    if (this.missingFields()) return this.errors;

    this[method](data);
    return this.errors;
  }

  requestIsEmpty() {
    if (!Object.keys(this.data).length) {
      this.errors.push('Empty request');
      return true;
    }
  }

  missingFields() {
    const missingProps = this.expectedProps.reduce((acc, field) => {
      if (!this.data[field]) acc.push(field);
      return acc;
    }, []);

    if (missingProps.length) {
      this.errors.push(`Missing fields: ${missingProps}`);
      return true;
    }
  }

  order() {
    this.errors.push(...this.checkItems());
    this.errors.push(...this.checkPhone());
  }

  checkItems() {
    const { items } = this.data;
    if (!Array.isArray(items)) return ['items must be an array of service ids'];
    if (!this.data.items.length) return ['At least one service is required'];

    const allNumbers = items.every(item => Number.isInteger(+item));

    if (!allNumbers) return ['items contain non-number elements'];
    return [];
  }

  checkPhone() {
    if (!this.regex.phone.test(this.data.phone)) return ['invalid phone number'];
    return [];
  }
}

export default Validator;
