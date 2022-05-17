/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import chai from 'chai';
import chaiHttp from 'chai-http';
import { server } from '../src/server';

chai.should();
chai.use(chaiHttp);

const disc = {
  title: `Brand New Cloudbreaker4!`,
  brand: 'Discmania',
  type: 'distance',
  mold: 'DD3',
  basePlastic: 'S-Line',
  subPlastic: 'Glow',
  run: 'Cloudbreaker 3',
  condition: 11,
  price: 785,
  image: '/media/discs/disc20.jpeg',
};

describe('/api/discs', () => {
  it('should return an array of all discs', (done) => {
    chai
      .request(server)
      .get('/api/discs')
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.a('string');
        done();
      });
  });

  it('should add a new disc to the db', (done) => {
    chai
      .request(server)
      .post('/api/discs')
      .send(disc)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
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

  // it('should delete a disc when given an existing disc id', (done) => {
  //   chai
  //     .request(server)
  //     .delete('/api/discs/23')
  //     .end((err, res) => {
  //       res.should.have.status(200);
  //       res.body.should.be.an('object');
  //       done();
  //     });
  // });
});
