const BaseballGame = require('../src/BaseballGame');
const { isNumber, isThreeDigit, isInRange, isDifferent } = require('../src/utils/validation');

describe('세자리 난수 생성 테스트', () => {
  test('createComputerNumber를 실행하면 길이가 3인 배열이 반환되어야 한다.', () => {
    const baseballGame = new BaseballGame();
    const randomNumbers = baseballGame.createComputerNumber();

    expect(randomNumbers).toHaveLength(3);
  });

  test('createComputerNumber를 실행하면 중복된 숫자가 없어야 한다.', () => {
    const baseballGame = new BaseballGame();
    const randomNumbers = baseballGame.createComputerNumber();
    const set = new Set();

    randomNumbers.map((number) => set.add(number));

    expect(set.size).toBe(3);
  });
});

describe('검증 함수 테스트', () => {
  test('숫자 판별 테스트', () => {
    const input = ['a', 1, 'b'];
    const result = isNumber(input);

    expect(result).toBeFalsy();
  });

  test('세자리 숫자 판별 테스트', () => {
    const input = [1, 2];
    const result = isThreeDigit(input);

    expect(result).toBeFalsy();
  });

  test('범위 안의 숫자인지 테스트', () => {
    const input = [0, 1, 2];
    const result = isInRange(input);

    expect(result).toBeFalsy();
  });

  test('서로 다른 숫자인지 테스트', () => {
    const input = [8, 8, 2];
    const result = isDifferent(input);

    expect(result).toBeFalsy();
  });

  test('숫자 판별 테스트', () => {
    const input = ['a', 1, 'b'];
    const result = isNumber(input);

    expect(result).toBeFalsy();
  });
});
