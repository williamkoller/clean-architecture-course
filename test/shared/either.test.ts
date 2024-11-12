import { Left, Right, left, right, Either } from '@/shared/either';

describe('Either Type', () => {
  it('should create an instance of Left', () => {
    const leftInstance = left<string, number>('Error');
    expect(leftInstance).toBeInstanceOf(Left);
    expect(leftInstance.isLeft()).toBe(true);
    expect(leftInstance.isRight()).toBe(false);
    expect(leftInstance.value).toBe('Error');
  });

  it('should create an instance of Right', () => {
    const rightInstance = right<string, number>(42);
    expect(rightInstance).toBeInstanceOf(Right);
    expect(rightInstance.isLeft()).toBe(false);
    expect(rightInstance.isRight()).toBe(true);
    expect(rightInstance.value).toBe(42);
  });

  it('should distinguish between Left and Right', () => {
    const leftInstance: Either<string, number> = new Left('Left value');
    const rightInstance: Either<string, number> = new Right(100);

    expect(leftInstance.isLeft()).toBe(true);
    expect(leftInstance.isRight()).toBe(false);

    expect(rightInstance.isLeft()).toBe(false);
    expect(rightInstance.isRight()).toBe(true);
  });

  it('should hold values correctly', () => {
    const leftInstance = left<string, number>('Some error');
    const rightInstance = right<string, number>(123);

    expect(leftInstance.value).toBe('Some error');
    expect(rightInstance.value).toBe(123);
  });
});
