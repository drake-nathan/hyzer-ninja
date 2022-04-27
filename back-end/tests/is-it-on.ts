import chai from 'chai';
import chaiHttp from 'chai-http';
import { server } from '../src/server';

chai.should();
chai.use(chaiHttp);

describe('/test', () => {
  it('should return an office quote', (done) => {
    chai
      .request(server)
      .get('/test')
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.a('string');
        done();
      });
  });
});
