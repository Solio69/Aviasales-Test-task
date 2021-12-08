class ApiServise {
  baseStr = 'https://front-test.beta.aviasales.ru/';
  // baseStr = 'https://aviasales-test-api.java-mentor.com/';

  // получить ключ
  async getKey() {
    const body = await fetch(`${this.baseStr}search`).then((res) => {
      if (!res.ok) {
        throw new Error(`error fetch URL ${`${this.baseStr}search`}, response status ${res.status}`);
      }
      return res.json();
    });

    return body.searchId;
  }

  // получить билеты
  async getTickets(searchId) {
    try {
      const body = await fetch(`${this.baseStr}tickets?searchId=${searchId}`).then((res) => {
        if (!res.ok) {
          throw new Error(
            `error fetch URL ${`${this.baseStr}tickets?searchId=${searchId}`}, response status ${res.status}`
          );
        }
        return res.json();
      });
      // console.log(body);
      return body;
    } catch {
      return {
        tickets: [], // вернет пустой массв если произойдет ошибка
      };
    }
  }
}

const apiServise = new ApiServise();

export default apiServise;
