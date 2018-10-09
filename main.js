var loadingAnimation = anime ({
  targets: 'div.circle',
  translateY: [
    {
      value: -40,
      duration: 1000
    },
    {
      value: 0,
      duration: 1500
    },
  ],
  backgroundColor: [
    {
      value: '#BEBEBE',
      duration: 100,
      easing: 'linear'
    },
    {
        value: '#808080',
        duration: 100,
        easing: 'linear',
        delay: 1000
    }
  ],
  delay: function(el, i, l) {return i * 1000},
  loop: true
});
