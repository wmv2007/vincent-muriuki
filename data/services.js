export function getService (serviceId) {
  let matchingService;

  services.forEach((service) => {
    if (service.id === serviceId) {
      matchingService = service;
    }
  });


  return matchingService;
}

export const services = [{
  id: '001',
  name: 'Simple one page websites created using simple languages.',
  shortName: 'One-Page Website',
  example: '<a class="service-example" href="examples/example-singlepage.html">Example</a>',
  priceCents: '15000'
}, {
  id: '002',
  name: `Simple multi-page websites created using simple languages.
No JavaScript.`,
  shortName: 'Multi-Page Website',
  example: '<a class="service-example" href="examples/example-multipage.html">Example</a>',
  priceCents: '18500'
}, {
  id: '003',
  name: 'Simple one page websites created using simple lanuages with javascript.',
  shortName: 'One-Page Website + JavaScript',
  example: '<a class="service-example" href="examples/example-singlepage-js.html">Example</a>',
  priceCents: '22386'
}, {
  id: '004',
  name: 'Simple multipage page websites created using simple lanuages with javascript.',
  shortName: 'Multi-Page Website + JavaScript',
  example: '<a class="service-example" href="examples/example-multipage-js.html">Example</a>',
  priceCents: '39999'
}, {
  id: '005',
  name: 'complex multi page websites created using simple lanuages with javascript.',
  shortName: 'Advanced Website + JavaScript',
  example: '<a class="service-example" href="examples/javascript-amazon-project-main/amazon.html">Example</a>',
  priceCents: '180000'
}];