from .atri import Atri
from fastapi import Request, Response
from atri_utils import *
from passporteye import read_mrz

def detect_passport_mrz(img_path):
    path = img_path
    ## Note instead of path we can also pass in image_data in bytes


    mrz = read_mrz(path, save_roi=True)
    data = mrz.to_dict()
    final_data = {'Nationality': data['country'], 'name': data['names'].split()[0], 'surname': data['surname'],
                  'type': data['type'], 'data_of_birth': '/'.join(
            [data['date_of_birth'][:2], data['date_of_birth'][2:4], data['date_of_birth'][4:6]][::-1]),
                  'sex': data['sex'], 'expiration_date': '/'.join(
            [data['expiration_date'][:2], data['expiration_date'][2:4], data['expiration_date'][4:6]][::-1]),
                  'number': data['number']}

    return mrz.aux['roi'], final_data

def init_state(at: Atri):
    """
    This function is called everytime "Publish" button is hit in the editor.
    The argument "at" is a dictionary that has initial values set from visual editor.
    Changing values in this dictionary will modify the intial state of the app.
    """
    at.Flex63.styles.display = 'none'
    pass

def handle_page_request(at: Atri, req: Request, res: Response, query: str):
    """
    This function is called whenever a user loads this route in the browser.
    """
    pass

def handle_event(at: Atri, req: Request, res: Response):
    """
    This function is called whenever an event is received. An event occurs when user
    performs some action such as click button.
    """
    if at.Upload1.onChange:
        if at.Upload1.io.files:
            file = at.Upload1.io.files[0]
            bg_bytes = file.file.read()
            at.Flex65.styles.display = 'none'
            at.Flex63.styles.display = 'flex'
            at.Image35.custom.src = create_media_response(bg_bytes, mime_type=file.content_type)
            with open('test_image.png', "wb") as f:
                f.write(bg_bytes)
    if at.Flex64.onClick:
        mrz_image, data_dic = detect_passport_mrz('test_image.png')  # TODO: Add image Path
        print(data_dic)