html {
  font-size: $body-size;
  line-height: $body-line-height;
}

@include tablet {
  html {
    font-size: $body-size-tablet;
    line-height: $body-line-height-tablet;
  }
}

@include desktop {
  html {
    font-size: $body-size-desktop;
    line-height: $body-line-height-desktop;
  }
}

@include widescreen {
  html {
    font-size: $body-size-widescreen;
    line-height: $body-line-height-widescreen;
  }
}

@include fullhd {
  html {
    font-size: $body-size-fullhd;
    line-height: $body-line-height-fullhd;
  }
}

body,
button,
input,
select,
textarea {
  font-family: $family-sans-serif;
  font-size: 1rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $family-sans-serif;
  font-size: inherit;
  font-weight: $weight-medium;
}