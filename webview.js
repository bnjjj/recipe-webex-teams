module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0;
    try {
      let span = document.getElementsByClassName('navigation-list-item--badgeCount');
      if (!span || span.length === 0) {
        Franz.setBadge(0);
        return null;
      }

      count = parseInt(span[0].textContent, 10);
      if (Number.isNaN(count)) {
        count = 0;
      }
    } catch (error) {
      console.log(error);
    }

    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};