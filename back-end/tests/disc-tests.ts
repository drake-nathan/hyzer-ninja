/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import chai from 'chai';
import chaiHttp from 'chai-http';
import { server } from '../src/server';

chai.should();
chai.use(chaiHttp);

describe('/api/discs', () => {
  it('should return an array of all discs', (done) => {
    chai
      .request(server)
      .get('/api/discs')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('array');
        done();
      });
  });
});

describe('/api/discs/:id', () => {
  it('should return a single object of one disc based on id param', (done) => {
    chai
      .request(server)
      .get('/api/discs/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        done();
      });
  });
});
