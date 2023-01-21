process.env.NODE_ENV = 'test'
import chai from 'chai'
import chaiHttp from 'chai-http'
import { server } from './server.js'

chai.use(chaiHttp)
const should = chai.should()

/* eslint-disable no-undef */
describe('routes: index', async () => {
  describe('GET /', async () => {
    it('should return something', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          should.not.exist(err)
          res.status.should.eql(200)
          res.type.should.eql('application/json')
          res.body.status.should.eql('success')
          res.body.message.should.not.eql(undefined)
          console.log('uh, could use some help, here...')
          done()
        })
    })
  })
})
