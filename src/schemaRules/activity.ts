import { restrictToSchema, optional, required, Rule } from 'rulr';
import { stringValue, iri, definition } from '../factory';
import restrictToValue from '../helpers/restrictToValue';

export default restrictToSchema({
  objectType: optional(restrictToValue('Activity')),
  id: required(stringValue),
  definition: optional(definition),
}) as Rule;
