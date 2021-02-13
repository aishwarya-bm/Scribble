var count_likes = 0;
function updateLikes()
{
    count_likes++;
    document.getElementById('likeBtn').innerText = "Liked";
    if(count_likes == 1)
    {
        document.getElementById('likesCount').innerHTML = '<p>'+count_likes +' person likes this'+'</p>';
    }
    else
    {
        document.getElementById('likesCount').innerHTML = '<p>'+count_likes +' people like this'+'</p>';
    }
}

function editPost() {
    document.getElementById('editBtn').style.display = 'none';
    document.getElementById('saveBtn').style.display = 'block';

    var title = document.getElementById('title').innerText;
    document.getElementById('title').innerText = '';
    var editTitle = document.createElement('input');
    editTitle.setAttribute('type','text');
    editTitle.setAttribute('value',title);
    editTitle.setAttribute('id','inputPostTitle');
    document.getElementById('title').appendChild(editTitle);

    var content = document.getElementById('content').innerText;
    document.getElementById('content').innerText = '';
    var editContent= document.createElement('textarea');
    editContent.setAttribute('id','inputPostContent');
    editContent.style.height = '350px';
    document.getElementById('content').appendChild(editContent);
    var t = document.createTextNode(content);
    editContent.appendChild(t);
}

function savePost()
{
    document.getElementById('editBtn').style.display = '';
    document.getElementById('saveBtn').style.display = 'none';

    var title = document.getElementById('inputPostTitle').value;
    var titleElement = document.createTextNode(title);
    // titleElement.setAttribute('font-weight','bolder');
    document.getElementById('title').style.fontWeight = 'bolder';
    document.getElementById('title').innerHTML = '';
    document.getElementById('title').appendChild(titleElement);

    var content = document.getElementById('inputPostContent').value;
    document.getElementById('content').innerHTML = '';
    var contentElement= document.createTextNode(content);
    document.getElementById('content').appendChild(contentElement);

}

var commentCount = 0;
function addComment()
{
    var comment = document.getElementById('inputComment');
    var commentSection = document.getElementById('commentSection');
    if(commentCount == 0)
        commentSection.innerHTML += '<h5>All comments</h5>';

    var para  = document.createElement('p');
    para.appendChild(document.createTextNode(comment.value));
    para.setAttribute('class','userComment');
    commentSection.appendChild(para);          
    comment.value = '';
    commentCount++;
}