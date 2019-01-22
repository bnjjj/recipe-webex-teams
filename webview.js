module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let span = document.querySelectorAll('#container > nav > ul > li:nth-child(1) > div > button > span > span');
    if (!span || span.length === 0) {
      return null;
    }
    let count = parseInt(span[0].innerText, 10);
    if (!Number.isNaN(count) || count > 0) {
      Franz.setBadge(count);
    }
  };

  Franz.loop(getMessages);
};
