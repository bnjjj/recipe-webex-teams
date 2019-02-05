module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let span = document.getElementsByClassName('navigation-list-item--badgeCount');
    if (!span || span.length === 0) {
      Franz.setBadge(0);
      return null;
    }
    let count = parseInt(span[0].innerText, 10);
    if (Number.isNaN(count)) {
      count = 0;
    }
    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};
