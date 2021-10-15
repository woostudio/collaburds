# cds-calendar-container



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute | Description   | Type   | Default     |
| ------------- | --------- | ------------- | ------ | ----------- |
| `currentDate` | --        | Selected Date | `Date` | `undefined` |


## Events

| Event      | Description      | Type               |
| ---------- | ---------------- | ------------------ |
| `selected` | On date selected | `CustomEvent<any>` |


## Dependencies

### Used by

 - [cds-calendar](..)
 - [cds-calendar-input](../calendar-input)

### Depends on

- [cds-calendar-content](../calendar-content)
- [cds-icon](../../../elements/icon)

### Graph
```mermaid
graph TD;
  cds-calendar-container --> cds-calendar-content
  cds-calendar-container --> cds-icon
  cds-calendar --> cds-calendar-container
  cds-calendar-input --> cds-calendar-container
  style cds-calendar-container fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
