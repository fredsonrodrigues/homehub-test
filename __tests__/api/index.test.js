import { createMocks } from 'node-mocks-http';
import getBreeds from '../../pages/api/breeds/index.js';
import getOneBreed from '../../pages/api/breeds/[pid].js';

describe('testing API /breeds/', () => {

  const setup = async (props) => {
    const { req, res } = createMocks({
      method: 'GET',
      ...props
    });
    await getBreeds(req, res);
    return {
      req,
      res
    }
  }

  const setupOneBreed = async (props) => {
    const { req, res } = createMocks({
      method: 'GET',
      ...props
    });
    await getOneBreed(req, res);
    return {
      req,
      res
    }
  }

  test('returns a correctly breeds length', async () => {
    const { res } = await setup();
    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toHaveLength(4);
  });

  test('returns the first specified breed correctly', async () => {
    const { res } = await setup();
    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())[0]).toEqual(
      expect.objectContaining({
        name: "Akita",
      }),
    );
  });

  test('returns the selected breed correctly', async () => {
    const { res } = await setupOneBreed({ query: { pid: 121 }});
    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        name: "Golden Retriever",
        temperament: "Intelligent, Kind, Reliable, Friendly, Trustworthy, Confident"
      }),
    );
  });

});