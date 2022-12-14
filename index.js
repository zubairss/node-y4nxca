const Joi = require('joi');


const warnUndefined = (value, helper) => {
  const keys = helper.schema.$_terms.keys;
  keys.map((key) => {
    if (!value[key.key]) {
      const k = key.schema._flags.label;
      helper.warn('any.unknown', { msg: 'Value Required', k: k })
    }
    // if (key.schema.type === 'object') {
    //   if (!value[key.key]) {
    //     helper.warn('any.unknown', { msg: 'Value Required', k: key.key })
    //   }
    // } else if (key.schema.type === 'array') {
    //   if (!(value[key.key]) || value[key.key].length === 0) {
    //     helper.warn('any.unknown', { msg: 'Value Required', k: key.key })
    //   }
    // } else {
    //   if (!value[key.key]) {
    //     const k = key.schema._flags.label;
    //     helper.warn('any.unknown', { msg: 'Value Required', k: k })
    //   }
    // }
  })
};


const auth = {
  InputMessage: {
    origin: '2',
    first_name: 'Zubair',
    addresses: {
      current: {
        city: "sdsds",
        postalCode: "sdsds",
        streetName: "sdsds",
        houseNumber: 1223,
        one: "dsds"
      },
      garage5: {
        one: 'sds'
      },
      garage4: {
        one: 'sds'
      },
      garage3: {
        one: 'sds'
      },
      garage2: {
        one: 'sds'
      },
      garage: {
        one: 'sds'
      },
      prior: {
        city: "sdsds",
        postalCode: "sdsds",
        streetName: "sdsds",
        houseNumber: 1223,
        one: "dsds"
      },
      mailing: {
        one: 'sds'
      },
    },
    // vehicles: [{ year: 2022 }],
  }
};

const authSchema = Joi.object()
  .keys({
    InputMessage: Joi.object().keys({
      first_name: Joi.string().max(255).label('InputMessage.first_name'),
      last_name: Joi.string().max(255).label('InputMessage.last_name'),
      phone_number: Joi.string().max(255).label('InputMessage.phone_number'),
      email: Joi.string().max(255).label('InputMessage.email'),
      principality: Joi.string().max(2).label('InputMessage.principality'),
      postcode: Joi.string().max(5).label('InputMessage.postcode'),
      origin: Joi.string().max(50).label('InputMessage.origin').required(),
      vehicles: Joi.array().items(
        Joi.object().keys({
          vin: Joi.string().label(
            'InputMessage.data.Quote.Risk.vehicles.vin',
          ),
          year: Joi.number().label(
            'InputMessage.data.Quote.Risk.vehicles.year',
          ),
          model: Joi.string().label(
            'InputMessage.data.Quote.Risk.vehicles.model',
          ),
          baseMSRP: Joi.number().label(
            'InputMessage.data.Quote.Risk.vehicles.baseMSRP',
          ),
          usage: Joi.object().keys({
            distanceOneWay: Joi.number().label(
              'InputMessage.data.Quote.Risk.vehicles.usage.distanceOneWay',
            ),
            numberOfDays: Joi.number().label(
              'InputMessage.data.Quote.Risk.vehicles.usage.numberOfDays',
            ),
            estimatedAnnualDistance: Joi.number().label(
              'InputMessage.data.Quote.Risk.vehicles.usage.estimatedAnnualDistance',
            ),
            principalOperatorIndex: Joi.number().label(
              'InputMessage.data.Quote.Risk.vehicles.usage.principalOperatorIndex',
            ),
            principalOperatorName: Joi.any().label(
              'InputMessage.data.Quote.Risk.vehicles.usage.principalOperatorName',
            ),
            occasionalOperatorIndex: Joi.number().label(
              'InputMessage.data.Quote.Risk.vehicles.usage.occasionalOperatorIndex',
            ),
            occasionalOperatorName: Joi.any().label(
              'InputMessage.data.Quote.Risk.vehicles.usage.occasionalOperatorName',
            ),
          }).custom(warnUndefined, "Warn on undefined keys"),
          additionalInterestIndex: Joi.number().label(
            'InputMessage.data.Quote.Risk.vehicles.additionalInterestIndex',
          ),
        }).custom(warnUndefined, "Warn on undefined keys"),
      ),
      addresses: Joi.object().keys({
        current: Joi.object().keys({
          one: Joi.string()
            .label('InputMessage.data.Quote.Risk.addresses.current.one')
            .required(),
          houseNumber: Joi.number()
            .label(
              'InputMessage.data.Quote.Risk.addresses.current.houseNumber',
            )
            .required(),
          streetName: Joi.string()
            .label(
              'InputMessage.data.Quote.Risk.addresses.current.streetName',
            )
            .required(),
          unitNumber: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.current.unitNumber',
          ),
          poBox: Joi.number().label(
            'InputMessage.data.Quote.Risk.addresses.current.poBox',
          ),
          postalCode: Joi.string()
            .label(
              'InputMessage.data.Quote.Risk.addresses.current.postalCode',
            )
            .required(),
          city: Joi.string()
            .label('InputMessage.data.Quote.Risk.addresses.current.city')
            .required(),
          county: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.current.county',
          ),
          preDirection: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.current.preDirection',
          ),
          onlyStreet: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.current.onlyStreet',
          ),
          postDirection: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.current.postDirection',
          ),
          suffix: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.current.suffix',
          ),
          monthsAt: Joi.number().label(
            'InputMessage.data.Quote.Risk.addresses.current.monthsAt',
          ),
        }).custom(warnUndefined, "Warn on undefined keys"),
        prior: Joi.object().keys({
          one: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.prior.one',
          ),
          houseNumber: Joi.number().label(
            'InputMessage.data.Quote.Risk.addresses.prior.houseNumber',
          ),
          streetName: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.prior.streetName',
          ),
          unitNumber: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.prior.unitNumber',
          ),
          poBox: Joi.number().label(
            'InputMessage.data.Quote.Risk.addresses.prior.poBox',
          ),
          postalCode: Joi.string()
            .label(
              'InputMessage.data.Quote.Risk.addresses.prior.postalCode',
            )
            .required(),
          city: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.prior.city',
          ),
          county: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.prior.county',
          ),
          preDirection: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.prior.preDirection',
          ),
          onlyStreet: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.prior.onlyStreet',
          ),
          postDirection: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.prior.postDirection',
          ),
          suffix: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.prior.suffix',
          ),
          monthsAt: Joi.number().label(
            'InputMessage.data.Quote.Risk.addresses.prior.monthsAt',
          ),
        }).custom(warnUndefined, "Warn on undefined keys"),
        mailing: Joi.object().keys({
          one: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.mailing.one',
          ),
          houseNumber: Joi.number().label(
            'InputMessage.data.Quote.Risk.addresses.mailing.houseNumber',
          ),
          streetName: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.mailing.streetName',
          ),
          unitNumber: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.mailing.unitNumber',
          ),
          poBox: Joi.number().label(
            'InputMessage.data.Quote.Risk.addresses.mailing.poBox',
          ),
          postalCode: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.mailing.postalCode',
          ),
          city: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.mailing.city',
          ),
          county: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.mailing.county',
          ),
          preDirection: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.mailing.preDirection',
          ),
          onlyStreet: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.mailing.onlyStreet',
          ),
          postDirection: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.mailing.postDirection',
          ),
          suffix: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.mailing.suffix',
          ),
          monthsAt: Joi.number().label(
            'InputMessage.data.Quote.Risk.addresses.mailing.monthsAt',
          ),
        }).custom(warnUndefined, "Warn on undefined keys"),
        garage: Joi.object().keys({
          one: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage.one',
          ),
          houseNumber: Joi.number().label(
            'InputMessage.data.Quote.Risk.addresses.garage.houseNumber',
          ),
          streetName: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage.streetName',
          ),
          unitNumber: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage.unitNumber',
          ),
          poBox: Joi.number().label(
            'InputMessage.data.Quote.Risk.addresses.garage.poBox',
          ),
          postalCode: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage.postalCode',
          ),
          city: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage.city',
          ),
          county: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage.county',
          ),
          preDirection: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage.preDirection',
          ),
          onlyStreet: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage.onlyStreet',
          ),
          postDirection: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage.postDirection',
          ),
          suffix: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage.suffix',
          ),
          monthsAt: Joi.number().label(
            'InputMessage.data.Quote.Risk.addresses.garage.monthsAt',
          ),
        }).custom(warnUndefined, "Warn on undefined keys"),
        garage2: Joi.object().keys({
          one: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage2.one',
          ),
          houseNumber: Joi.number().label(
            'InputMessage.data.Quote.Risk.addresses.garage2.houseNumber',
          ),
          streetName: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage2.streetName',
          ),
          unitNumber: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage2.unitNumber',
          ),
          poBox: Joi.number().label(
            'InputMessage.data.Quote.Risk.addresses.garage2.poBox',
          ),
          postalCode: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage2.postalCode',
          ),
          city: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage2.city',
          ),
          county: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage2.county',
          ),
          preDirection: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage2.preDirection',
          ),
          onlyStreet: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage2.onlyStreet',
          ),
          postDirection: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage2.postDirection',
          ),
          suffix: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage2.suffix',
          ),
          monthsAt: Joi.number().label(
            'InputMessage.data.Quote.Risk.addresses.garage2.monthsAt',
          ),
        }).custom(warnUndefined, "Warn on undefined keys"),
        garage3: Joi.object().keys({
          one: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage3.one',
          ),
          houseNumber: Joi.number().label(
            'InputMessage.data.Quote.Risk.addresses.garage3.houseNumber',
          ),
          streetName: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage3.streetName',
          ),
          unitNumber: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage3.unitNumber',
          ),
          poBox: Joi.number().label(
            'InputMessage.data.Quote.Risk.addresses.garage3.poBox',
          ),
          postalCode: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage3.postalCode',
          ),
          city: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage3.city',
          ),
          county: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage3.county',
          ),
          preDirection: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage3.preDirection',
          ),
          onlyStreet: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage3.onlyStreet',
          ),
          postDirection: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage3.postDirection',
          ),
          suffix: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage3.suffix',
          ),
          monthsAt: Joi.number().label(
            'InputMessage.data.Quote.Risk.addresses.garage3.monthsAt',
          ),
        }).custom(warnUndefined, "Warn on undefined keys"),
        garage4: Joi.object().keys({
          one: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage4.one',
          ),
          houseNumber: Joi.number().label(
            'InputMessage.data.Quote.Risk.addresses.garage4.houseNumber',
          ),
          streetName: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage4.streetName',
          ),
          unitNumber: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage4.unitNumber',
          ),
          poBox: Joi.number().label(
            'InputMessage.data.Quote.Risk.addresses.garage4.poBox',
          ),
          postalCode: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage4.postalCode',
          ),
          city: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage4.city',
          ),
          county: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage4.county',
          ),
          preDirection: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage4.preDirection',
          ),
          onlyStreet: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage4.onlyStreet',
          ),
          postDirection: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage4.postDirection',
          ),
          suffix: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage4.suffix',
          ),
          monthsAt: Joi.number().label(
            'InputMessage.data.Quote.Risk.addresses.garage4.monthsAt',
          ),
        }).custom(warnUndefined, "Warn on undefined keys"),
        garage5: Joi.object().keys({
          one: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage5.one',
          ),
          houseNumber: Joi.number().label(
            'InputMessage.data.Quote.Risk.addresses.garage5.houseNumber',
          ),
          streetName: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage5.streetName',
          ),
          unitNumber: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage5.unitNumber',
          ),
          poBox: Joi.number().label(
            'InputMessage.data.Quote.Risk.addresses.garage5.poBox',
          ),
          postalCode: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage5.postalCode',
          ),
          city: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage5.city',
          ),
          county: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage5.county',
          ),
          preDirection: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage5.preDirection',
          ),
          onlyStreet: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage5.onlyStreet',
          ),
          postDirection: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage5.postDirection',
          ),
          suffix: Joi.string().label(
            'InputMessage.data.Quote.Risk.addresses.garage5.suffix',
          ),
          monthsAt: Joi.number().label(
            'InputMessage.data.Quote.Risk.addresses.garage5.monthsAt',
          ),
        }).custom(warnUndefined, "Warn on undefined keys"),
      }).custom(warnUndefined, "Warn on undefined keys"),
    })
    .custom(warnUndefined, "Warn on undefined keys"),
  })
  .options({
    abortEarly: false,
    allowUnknown: false,
  })

const { value, error, warning } = authSchema.validate(auth);

console.log("error", error);
// console.log("warning", warning);
// console.log("warning", warning['details'][8]['context']);
if (!error) {
  if (warning) {
    warning.details.map((detail) => {
      console.log(detail.context);
    })
  }
}