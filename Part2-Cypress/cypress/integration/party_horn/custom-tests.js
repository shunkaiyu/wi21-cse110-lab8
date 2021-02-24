describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Volume changes to 75', ()=>{
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then($el => {
      expect($el).to.have.value(75);
    });
  });

  it('Silder changes to 33', ()=>{
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then($el => {
      expect($el).to.have.value(33);
    });
  });

  it('Audio changes to 33', ()=>{
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('audio').then($el => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image and sound source change when selecting horn button', ()=>{
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  it('image change volume>66', () => {
    cy.get('#volume-slider').invoke('val', 73).trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    }
      )
  });

  it('image change 33<volume<=66', () => {
    cy.get('#volume-slider').invoke('val', 43).trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    }
      )
  });

  it('image change 0<volume<33', () => {
    cy.get('#volume-slider').invoke('val', 23).trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    }
      )
  });

  it('image change volume=0', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    }
      )
  });

  it('Honk button disables when text input is empty', ()=>{
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled', 'disabled');
    })
  })

  it('Honk button disables when text input is non-number', ()=>{
    cy.get('#volume-number').clear().type('n');
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled', 'disabled');
    })
  })

  it('Error when text input is out of range', ()=>{
    cy.get('#volume-number').clear().type('101');
    cy.get('#honk-btn').click();
    cy.get('input:invalid').then($el => {
      expect($el).to.have.value(101);
    })
  })




});
