const app       = require('../app');
const request   = require('supertest');
const Album       = require('../api/album/model');
const Song       = require('../api/song/model');
const User      = require('../api/user/model');
const mongoose  = require('mongoose');
const albumId     = new mongoose.Types.ObjectId;
const songId = new mongoose.Types.ObjectId;

var prepareData = async () => {
  new User({
    "username": "sampleAuthor557",
    "email": "sample.author557@test.com",
    "password": "dummy",
    "gender": "other",
    "name": "sample auth"
  }).save().then((dummyAuthor) => {
    runTests(dummyAuthor);
  });
}

var runTests = (dummyAuthor) => {
  describe('Create Album', () => {
    let data = {
      "_id": albumId.toString(),
      "title": "dummy",
      "spotify_id": "154792"
    }
    it('respond with 200 created', (done) => {
      request(app)
      .post('/album')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
    });
  });

  describe('Index Album', () => {
    it('respond with json containing a list of all albuns', (done) => {
      request(app)
      .get('/album')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });
  });

  describe('Show Album', () => {
    it('respond with json containing an album', (done) => {
      request(app)
      .get('/album/' + albumId.toString())
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        if (!('title' in res.body)) throw new Error("missing title key");
        if (!('spotify_id' in res.body)) throw new Error("missing spotify_id key");
      })
      .expect(200, done);
    });
  });

  describe('Create a invalid Album', () => {
    let data = {
      "username": "dummy",
      "password": "dummy"
    }
    it('respond with 400 invalid fields', (done) => {
      request(app)
      .post('/album')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
    });
  });

  // SONG
  describe('Create Song', () => {
    let data = {
      "_id": songId.toString(),
      "title": "dummy",
      "spotify_id": "154999",
      "duration_ms": "350"
    }
    it('respond with 200 created', (done) => {
      request(app)
      .post('/song')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
    });
  });

  describe('Index Song', () => {
    it('respond with json containing a list of all songs', (done) => {
      request(app)
      .get('/song')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });
  });

  describe('Show Song', () => {
    it('respond with json containing a song', (done) => {
      request(app)
      .get('/song/' + songId.toString())
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        if (!('title' in res.body)) throw new Error("missing title key");
        if (!('duration_ms' in res.body)) throw new Error("missing duration_ms key");
        if (!('spotify_id' in res.body)) throw new Error("missing spotify_id key");
      })
      .expect(200, done);
    });
  });

  describe('Create a invalid Song', () => {
    let data = {
      "username": "dummy",
      "password": "dummy"
    }
    it('respond with 400 invalid fields', (done) => {
      request(app)
      .post('/song')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
    });
  });

  describe('Delete Song', () => {
    it('Respond with Song Deleted', (done) => {
      request(app)
      .delete('/song/' + songId.toString())
      .set('Accept', 'application/json')
      .expect('Content-Type', /text/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
    });
  });

  describe('Delete Album', () => {
    it('Respond with Album Deleted', (done) => {
      request(app)
      .delete('/album/' + albumId.toString())
      .set('Accept', 'application/json')
      .expect('Content-Type', /text/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
    });
  });

  describe('Delete dummy User', () => {
    it('Respond with User Deleted', (done) => {
      request(app)
      .delete('/user/' + dummyAuthor._id.toString())
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
    });
  });
}

prepareData();
