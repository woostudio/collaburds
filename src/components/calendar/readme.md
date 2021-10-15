# cds-calendar



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description   | Type      | Default     |
| -------- | --------- | ------------- | --------- | ----------- |
| `format` | `format`  | Format        | `string`  | `'L'`       |
| `show`   | `show`    | Show Calendar | `boolean` | `undefined` |
| `value`  | `value`   | value         | `string`  | `undefined` |


## Events

| Event      | Description      | Type               |
| ---------- | ---------------- | ------------------ |
| `selected` | On date selected | `CustomEvent<any>` |


## Methods

### `setDate(value: Date) => Promise<void>`

Set Date

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description     |
| ---- | --------------- |
|      | Trigger Content |


## Dependencies

### Depends on

- [cds-calendar-container](calendar-container)

### Graph
```mermaid
graph TD;
  cds-calendar --> cds-calendar-container
  cds-calendar-container --> cds-calendar-content
  cds-calendar-container --> cds-icon
  style cds-calendar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
