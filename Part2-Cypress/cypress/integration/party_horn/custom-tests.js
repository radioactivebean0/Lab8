describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it('Volume of audio changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image changes when select party horn radio horn', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/images/party-horn.svg');
    });
  });

  it('Sound changes when select party horn radio horn', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/party-horn.mp3');
    });
  });

  it('Volume image changes when 0', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-0.svg');
    });
  });

  it('Volume image changes when low', () => {
    cy.get('#volume-number').clear().type('2');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg');
    });
  });

  it('Volume image changes when medium', () => {
    cy.get('#volume-number').clear().type('40');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg');
    });
  });

  it('Volume image changes when high', () => {
    cy.get('#volume-number').clear().type('80');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg');
    });
  });

  it('Test honk disabled when textbox is empty', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Test honk disabled when textbox is non-number', () => {
    cy.get('#volume-number').clear().type('asdf');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Error shown when volume input out of range', () => {
    cy.get('#volume-number').clear().type('1000');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.match(':invalid');
    });
  });
});
