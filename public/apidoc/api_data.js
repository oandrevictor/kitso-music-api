define({ "api": [
  {
    "type": "delete",
    "url": "/album",
    "title": "Delete an album record given the id.",
    "name": "DeleteAlbum",
    "group": "Album",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "album_id",
            "description": "<p>The id of the album record.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>A message indicating if the action was successful or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>Detailed information in case the action was not successful.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/album/router.js",
    "groupTitle": "Album"
  },
  {
    "type": "get",
    "url": "/album",
    "title": "Get Information from multiple albuns given some criteria",
    "name": "GetAlbum",
    "group": "Album",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "albuns",
            "description": "<p>All albuns registered.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/album/router.js",
    "groupTitle": "Album",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the album.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "spotify_id",
            "description": "<p>The spotify's id of the album.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "release_date",
            "description": "<p>The album release date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "_songs",
            "description": "<p>An array with the ids of the album's songs.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "_artist",
            "description": "<p>An array with the ids of the album's performers.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/album",
    "title": "Get Information from a listen activity given the id.",
    "name": "GetAlbum",
    "group": "Album",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "album_id",
            "description": "<p>The id of the listen activity.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.title",
            "description": "<p>Title of the album.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.spotify_id",
            "description": "<p>The spotify's id of the album.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "album.release_date",
            "description": "<p>The album release date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "album._songs",
            "description": "<p>An array with the ids of the album's songs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "album._artist",
            "description": "<p>An array with the ids of the album's performers.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/album/router.js",
    "groupTitle": "Album"
  },
  {
    "type": "post",
    "url": "/album",
    "title": "Create a listen activity",
    "name": "PostAlbum",
    "group": "Album",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.title",
            "description": "<p>Title of the album.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.spotify_id",
            "description": "<p>The spotify's id of the album.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "album.release_date",
            "description": "<p>The album release date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "album._songs",
            "description": "<p>An array with the ids of the album's songs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "album._artist",
            "description": "<p>An array with the ids of the album's performers.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/album/router.js",
    "groupTitle": "Album",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the album.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "spotify_id",
            "description": "<p>The spotify's id of the album.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "release_date",
            "description": "<p>The album release date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "_songs",
            "description": "<p>An array with the ids of the album's songs.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "_artist",
            "description": "<p>An array with the ids of the album's performers.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/album",
    "title": "Update the information for a listen activity, given its id.",
    "name": "PutAlbum",
    "group": "Album",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "album_id",
            "description": "<p>The id of the listen activity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the album.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "spotify_id",
            "description": "<p>The spotify's id of the album.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "release_date",
            "description": "<p>The album release date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "_songs",
            "description": "<p>An array with the ids of the album's songs.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "_artist",
            "description": "<p>An array with the ids of the album's performers.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.title",
            "description": "<p>Title of the album.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.spotify_id",
            "description": "<p>The spotify's id of the album.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "album.release_date",
            "description": "<p>The album release date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "album._songs",
            "description": "<p>An array with the ids of the album's songs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "album._artist",
            "description": "<p>An array with the ids of the album's performers.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/album/router.js",
    "groupTitle": "Album"
  },
  {
    "type": "delete",
    "url": "/auth",
    "title": "Logout",
    "name": "DeleteAuth",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>A message indicating that the user was logged out.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/auth/router.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth",
    "title": "Get information for the current logged user (if there's one)",
    "name": "GetAuth",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>True if there's an user authenticated, false otherwise.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "user",
            "description": "<p>Authenticated user information (if there's an user authenticated).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/auth/router.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth",
    "title": "Login",
    "name": "PostAuth",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The user's identification.</p>"
          },
          {
            "group": "Parameter",
            "type": "Password",
            "optional": false,
            "field": "Password",
            "description": "<p>The user's password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>A message indicating if the login was successful or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>Detailed information if the login authentication was not successful.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/auth/router.js",
    "groupTitle": "Auth"
  },
  {
    "type": "delete",
    "url": "/listened",
    "title": "Delete a listen activity given the id.",
    "name": "DeleteListened",
    "group": "Listened",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "listened_id",
            "description": "<p>The id of the listen activity.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/listened/router.js",
    "groupTitle": "Listened"
  },
  {
    "type": "get",
    "url": "/listened",
    "title": "Get Information from multiple listeneds given some criteria",
    "name": "GetListened",
    "group": "Listened",
    "version": "0.0.0",
    "filename": "api/listened/router.js",
    "groupTitle": "Listened",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_song",
            "description": "<p>The id of the user related to the listened activity.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>The date when the listened activity happened.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>If the activity is privated and should be hidden from other users.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/listened",
    "title": "Get Information from a listen activity given the id.",
    "name": "GetListened",
    "group": "Listened",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "listened_id",
            "description": "<p>The id of the listen activity.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/listened/router.js",
    "groupTitle": "Listened"
  },
  {
    "type": "post",
    "url": "/listened",
    "title": "Create a listen activity",
    "name": "PostListened",
    "group": "Listened",
    "version": "0.0.0",
    "filename": "api/listened/router.js",
    "groupTitle": "Listened",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_song",
            "description": "<p>The id of the user related to the listened activity.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>The date when the listened activity happened.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>If the activity is privated and should be hidden from other users.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/listened",
    "title": "Update the information for a listen activity, given its id.",
    "name": "PutListened",
    "group": "Listened",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "listened_id",
            "description": "<p>The id of the listen activity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_song",
            "description": "<p>The id of the user related to the listened activity.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>The date when the listened activity happened.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>If the activity is privated and should be hidden from other users.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/listened/router.js",
    "groupTitle": "Listened"
  },
  {
    "type": "delete",
    "url": "/lyrics",
    "title": "Delete a lyrics given the id.",
    "name": "DeleteLyrics",
    "group": "Lyrics",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lyrics_id",
            "description": "<p>The id of the lyrics.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/lyrics/router.js",
    "groupTitle": "Lyrics"
  },
  {
    "type": "get",
    "url": "/lyrics",
    "title": "Get Information from multiple lyricss given some criteria",
    "name": "GetLyrics",
    "group": "Lyrics",
    "version": "0.0.0",
    "filename": "api/lyrics/router.js",
    "groupTitle": "Lyrics",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>The lyrics itself.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_song",
            "description": "<p>The id of the lyrics' song.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_explicit",
            "description": "<p>If the lyrics contains or not explicit language.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/lyrics",
    "title": "Get Information from a lyrics given the id.",
    "name": "GetLyrics",
    "group": "Lyrics",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lyrics_id",
            "description": "<p>The id of the lyrics.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/lyrics/router.js",
    "groupTitle": "Lyrics"
  },
  {
    "type": "post",
    "url": "/lyrics",
    "title": "Create a lyrics",
    "name": "PostLyrics",
    "group": "Lyrics",
    "version": "0.0.0",
    "filename": "api/lyrics/router.js",
    "groupTitle": "Lyrics",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>The lyrics itself.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_song",
            "description": "<p>The id of the lyrics' song.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_explicit",
            "description": "<p>If the lyrics contains or not explicit language.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/lyrics",
    "title": "Update the information for a lyrics, given its id.",
    "name": "PutLyrics",
    "group": "Lyrics",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lyrics_id",
            "description": "<p>The id of the lyrics.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>The lyrics itself.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_song",
            "description": "<p>The id of the lyrics' song.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_explicit",
            "description": "<p>If the lyrics contains or not explicit language.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/lyrics/router.js",
    "groupTitle": "Lyrics"
  },
  {
    "type": "delete",
    "url": "/performer",
    "title": "Delete a performer given the id.",
    "name": "DeletePerformer",
    "group": "Performer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "performer_id",
            "description": "<p>The id of the performer.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/performer/router.js",
    "groupTitle": "Performer"
  },
  {
    "type": "get",
    "url": "/performer",
    "title": "Get Information from a performers given the id.",
    "name": "GetPerformer",
    "group": "Performer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "performer_id",
            "description": "<p>The id of the performer.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/performer/router.js",
    "groupTitle": "Performer"
  },
  {
    "type": "get",
    "url": "/performer",
    "title": "Get Information from multiple performers given some criteria",
    "name": "GetPerformer",
    "group": "Performer",
    "version": "0.0.0",
    "filename": "api/performer/router.js",
    "groupTitle": "Performer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "spotify_id",
            "description": "<p>The spotify id of the performer.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "_people",
            "description": "<p>An array with the id of the people that are part of the associated entity, unless it's a band it will be a single entry array.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "_albuns",
            "description": "<p>An array with the ids of the performer's albuns.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the performer, used in case it's a band or the person uses an alias.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "_videos",
            "description": "<p>An array with the id of the song's composers.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration_ms",
            "description": "<p>The duration of the song in milliseconds.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "release_date",
            "description": "<p>Release date of the song.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_explicit",
            "description": "<p>If the song contains or not explicit language.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/performer",
    "title": "Create a performer",
    "name": "PostPerformer",
    "group": "Performer",
    "version": "0.0.0",
    "filename": "api/performer/router.js",
    "groupTitle": "Performer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "spotify_id",
            "description": "<p>The spotify id of the performer.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "_people",
            "description": "<p>An array with the id of the people that are part of the associated entity, unless it's a band it will be a single entry array.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "_albuns",
            "description": "<p>An array with the ids of the performer's albuns.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the performer, used in case it's a band or the person uses an alias.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "_videos",
            "description": "<p>An array with the id of the song's composers.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration_ms",
            "description": "<p>The duration of the song in milliseconds.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "release_date",
            "description": "<p>Release date of the song.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_explicit",
            "description": "<p>If the song contains or not explicit language.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/performer",
    "title": "Update the information for a performer, given its id.",
    "name": "PutPerformer",
    "group": "Performer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "performer_id",
            "description": "<p>The id of the performer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "spotify_id",
            "description": "<p>The spotify id of the performer.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "_people",
            "description": "<p>An array with the id of the people that are part of the associated entity, unless it's a band it will be a single entry array.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "_albuns",
            "description": "<p>An array with the ids of the performer's albuns.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the performer, used in case it's a band or the person uses an alias.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "_videos",
            "description": "<p>An array with the id of the song's composers.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration_ms",
            "description": "<p>The duration of the song in milliseconds.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "release_date",
            "description": "<p>Release date of the song.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_explicit",
            "description": "<p>If the song contains or not explicit language.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/performer/router.js",
    "groupTitle": "Performer"
  },
  {
    "type": "delete",
    "url": "/playlist",
    "title": "Delete a playlist given the id",
    "name": "DeletePlaylist",
    "group": "Playlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "playlist_id",
            "description": "<p>The id of the playlist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/playlist/router.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "get",
    "url": "/playlist",
    "title": "Retrieve Information (single)",
    "name": "GetPlaylist",
    "group": "Playlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "playlist_id",
            "description": "<p>The id of the playlist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/playlist/router.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "get",
    "url": "/playlist",
    "title": "Retrive Information (multiple) given some criteria",
    "name": "GetPlaylists",
    "group": "Playlist",
    "version": "0.0.0",
    "filename": "api/playlist/router.js",
    "groupTitle": "Playlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "spotify_id",
            "description": "<p>The spotify id of the song.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the playlist.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_user",
            "description": "<p>The owner of the playlist (must provide the user's id).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated_date",
            "description": "<p>Date of the last update in the playlist.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>If the playlist if private to the user and should be hidden for others.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/playlist",
    "title": "Create",
    "name": "PostPlaylist",
    "group": "Playlist",
    "version": "0.0.0",
    "filename": "api/playlist/router.js",
    "groupTitle": "Playlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "spotify_id",
            "description": "<p>The spotify id of the song.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the playlist.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_user",
            "description": "<p>The owner of the playlist (must provide the user's id).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated_date",
            "description": "<p>Date of the last update in the playlist.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>If the playlist if private to the user and should be hidden for others.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/playlist",
    "title": "Update the information for a playlist, given its id",
    "name": "PutPlaylist",
    "group": "Playlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "playlist_id",
            "description": "<p>The id of the playlist.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "spotify_id",
            "description": "<p>The spotify id of the song.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the playlist.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_user",
            "description": "<p>The owner of the playlist (must provide the user's id).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "updated_date",
            "description": "<p>Date of the last update in the playlist.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>If the playlist if private to the user and should be hidden for others.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/playlist/router.js",
    "groupTitle": "Playlist"
  },
  {
    "type": "delete",
    "url": "/song",
    "title": "Delete a song given the id",
    "name": "DeleteSong",
    "group": "Song",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "song_id",
            "description": "<p>The id of the song.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/song/router.js",
    "groupTitle": "Song"
  },
  {
    "type": "get",
    "url": "/song",
    "title": "Get Information from a song given the id",
    "name": "GetSong",
    "group": "Song",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "song_id",
            "description": "<p>The id of the song.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/song/router.js",
    "groupTitle": "Song"
  },
  {
    "type": "get",
    "url": "/song",
    "title": "Get Information from multiple songs given some criteria",
    "name": "GetSongs",
    "group": "Song",
    "version": "0.0.0",
    "filename": "api/song/router.js",
    "groupTitle": "Song",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "spotify_id",
            "description": "<p>The spotify id of the song.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the song.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "_composers",
            "description": "<p>An array with the id of the song's composers.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "_performers",
            "description": "<p>An array with the id of the song's performers.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "_albuns",
            "description": "<p>An array with the id of the albuns in which the song is contained.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_lyrics",
            "description": "<p>An id for the song's lyrics.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "_videos",
            "description": "<p>An array with the id of the song's composers.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration_ms",
            "description": "<p>The duration of the song in milliseconds.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "release_date",
            "description": "<p>Release date of the song.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_explicit",
            "description": "<p>If the song contains or not explicit language.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/song",
    "title": "Create a song",
    "name": "PostSong",
    "group": "Song",
    "version": "0.0.0",
    "filename": "api/song/router.js",
    "groupTitle": "Song",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "spotify_id",
            "description": "<p>The spotify id of the song.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the song.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "_composers",
            "description": "<p>An array with the id of the song's composers.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "_performers",
            "description": "<p>An array with the id of the song's performers.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "_albuns",
            "description": "<p>An array with the id of the albuns in which the song is contained.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_lyrics",
            "description": "<p>An id for the song's lyrics.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "_videos",
            "description": "<p>An array with the id of the song's composers.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration_ms",
            "description": "<p>The duration of the song in milliseconds.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "release_date",
            "description": "<p>Release date of the song.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_explicit",
            "description": "<p>If the song contains or not explicit language.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/song",
    "title": "Update the information for a song, given its id",
    "name": "PutSong",
    "group": "Song",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "song_id",
            "description": "<p>The id of the song.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "spotify_id",
            "description": "<p>The spotify id of the song.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the song.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "_composers",
            "description": "<p>An array with the id of the song's composers.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "_performers",
            "description": "<p>An array with the id of the song's performers.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "_albuns",
            "description": "<p>An array with the id of the albuns in which the song is contained.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_lyrics",
            "description": "<p>An id for the song's lyrics.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "_videos",
            "description": "<p>An array with the id of the song's composers.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration_ms",
            "description": "<p>The duration of the song in milliseconds.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "release_date",
            "description": "<p>Release date of the song.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_explicit",
            "description": "<p>If the song contains or not explicit language.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/song/router.js",
    "groupTitle": "Song"
  },
  {
    "type": "post",
    "url": "/delete/user_id",
    "title": "Delete an user given an id",
    "name": "DeleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>The id of the user to be deleted.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/user/router.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Get Information from an user given the id",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>The id of the user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/user/router.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Get Information from multiple users given some criteria",
    "name": "GetUsers",
    "group": "User",
    "version": "0.0.0",
    "filename": "api/user/router.js",
    "groupTitle": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>An unique identifier for the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User full name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>User's birthday.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>User's gender (either: male, female or other)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>User self description (aka bio)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create an user",
    "name": "PostUser",
    "group": "User",
    "version": "0.0.0",
    "filename": "api/user/router.js",
    "groupTitle": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>An unique identifier for the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User full name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>User's birthday.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>User's gender (either: male, female or other)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>User self description (aka bio)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/user",
    "title": "Update the information of a user, given its id",
    "name": "PutUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>The id of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>An unique identifier for the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User full name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>User's birthday.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>User's gender (either: male, female or other)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>User self description (aka bio)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/user/router.js",
    "groupTitle": "User"
  }
] });
