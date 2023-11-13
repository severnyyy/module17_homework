import { multiply } from "../index.js";
import { definePrime } from "../definePrime.js"
import { getPercent } from "../17-6-2_percent_function/percent.js"


describe(
  "test percent", () => {
    it('30 percent of 200 expect 60', () => {
      const result = getPercent(30, 200)
      expect(result).toBe(60);
    }),

      it('0 percent of 200 expect 0', () => {
        const result = getPercent(0, 200)
        expect(result).toBe(0);
      }),

      it('10 percent of 0 expect 0', () => {
        const result = getPercent(10, 0)
        expect(result).toBe(0);
      }),

      it('100 percent of 100 expect 100', () => {
        const result = getPercent(100, 100)
        expect(result).toBe(100);
      }),

      it('0 percent of 0 expect 0', () => {
        const result = getPercent(0, 0)
        expect(result).toBe(0);
      })

  }
);

xdescribe(
  "test multiply", () => {
    it('multiply 1 * 0 to equal 1', () => {
      const result = multiply(1, 0)
      expect(result).toBe(0);
    }),

      it('multiply 1 * 1 to equal 1', () => {
        const result = multiply(1, 1)
        expect(result).toBe(1);
      });

  }
);

xdescribe(
  "test multiply 2", () => {
    it('multiply 2 * 2 to equal 4', () => {
      const result = multiply(2, 2)
      expect(result).toBe(4);
    }),

      it('multiply 0 * 0 to equal 0', () => {
        const result = multiply(0, 0)
        expect(result).toBe(0);
      });

  }
);


describe(
  "test for definePrime func simp/comp/err", () => {

    const simp = 17;
    const comp = 20;

    it("simple case", () => {
      expect(definePrime(simp)).toBe(`Число ${simp} - простое число`)

      expect(definePrime(comp)).toBe(`Число ${comp} - составное число`)

      expect(definePrime(1001)).toBe("Данные неверны")
    })

  }
)
